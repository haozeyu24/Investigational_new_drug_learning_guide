#!/usr/bin/env python3
"""Small offline checks for discovery logic. No FDA assertions or network calls."""
import importlib.util,json,tempfile,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('screen',Path(__file__).with_name('screen_fda_index.py'))
screen=importlib.util.module_from_spec(spec);spec.loader.exec_module(screen)
class DiscoveryTests(unittest.TestCase):
 def test_static_and_metadata_links(self):
  html='''<a href="one.pdf">Original review</a><script>var pdfFilenames = {pharmr:"two.pdf",medr:["three.pdf","four.pdf"]};</script>'''
  self.assertEqual({x[0] for x in screen.package_links(html)},{'one.pdf','two.pdf','three.pdf','four.pdf'})
 def test_only_enabled_explicit_href_expressions(self):
  html='''var pdfBaseName = "204114Orig1s000"; var pdfFiles = {pharmR:1,medR:0}; if (pdfFiles.pharmR == 1) { x=pdfBaseName + 'PharmR.pdf'; } if (pdfFiles.medR == 1) { x=pdfBaseName + 'MedR.pdf'; }'''
  self.assertEqual([x[0] for x in screen.package_links(html)],['204114Orig1s000PharmR.pdf'])
 def test_no_invented_urls(self):
  self.assertEqual(screen.package_links('var pdfBaseName="123";var pdfFiles={pharmR:1};'),[])
 def test_whole_word_and_broad_coverage(self):
  self.assertFalse(screen.REGEX['ind_word'].search('individual findings'))
  self.assertTrue(screen.REGEX['ind_word'].search('IND 12345'))
  self.assertTrue(screen.REGEX['clinical_hold'].search('partial clinical hold'))
 def test_page_numbers_and_unreadable_flag(self):
  with tempfile.TemporaryDirectory() as temp:
   root=Path(temp);screen.TEXT=root;screen.HITS=root
   path=root/'fixture.pdf';doc=screen.fitz.open();p=doc.new_page();p.insert_text((50,50),'Original IND review: starting dose depends on toxicology and exposure.');doc.new_page();doc.save(path);doc.close()
   result=screen.screen_pdf(path,'fixture');hits=json.loads((root/'fixture.json').read_text())
   self.assertEqual(result['screen'],'keyword-positive');self.assertEqual(result['pages'],2);self.assertEqual(hits['hits'][0]['pdfPage'],1);self.assertEqual(hits['ocrNeededPages'],[2]);self.assertFalse(hits['verified'])
if __name__=='__main__':unittest.main()

# main chapters
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH01_gross_Hypermedia_In_Action.pdf CH01_gross_hypermedia.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH02_gross_Hypermedia_In_Action.pdf CH02_gross_creating_a_web_app.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH03_gross_Hypermedia_In_Action.pdf CH03_gross_extending_html.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH04_gross_Hypermedia_In_Action.pdf CH04_improving_our_hypermedia_application.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH05_gross_Hypermedia_In_Action.pdf CH05_advanced_hypermedia_patterns.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH09_gross_Hypermedia_In_Action.pdf CH09_gross_json_data_apis.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH10_gross_Hypermedia_In_Action.pdf CH10_gross_download_ui.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH11_gross_Hypermedia_In_Action.pdf CH11_gross_developing_with_htmx.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH12_gross_Hypermedia_In_Action.pdf CH12_gross_other_hypermedia_libraries.adoc
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/CH13_gross_Hypermedia_In_Action.pdf CH13_gross_retvrn.adoc

# TOC
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/TOC_gross_Hypermedia_In_Action.pdf TOC.adoc

# book
asciidoctor-pdf -a pdf-theme=manning -r /opt/homebrew/Cellar/asciidoctor/2.0.17/libexec/gems/asciidoctor-pdf-1.6.2/lib/sectnumoffset-treeprocessor.rb -o pdfs/generated/Hypermedia_In_Action.pdf index.adoc

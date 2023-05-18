INSERT INTO users
(first_name, last_name, email, oauth_id)
VALUES(NULL, NULL, 'infs7901@gmail.com', 'auth0|646580b892e83c2d192e933a'); /* Add user. to use this user. password: @infs7901 */

/* Insert into Content table */
INSERT INTO "content"
(content_id, "content_type")
VALUES(1, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(2, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(3, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(4, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(5, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(6, 'document'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(7, 'video'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(8, 'video'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(9, 'video'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(10, 'video'::public."content_type");
INSERT INTO "content"
(content_id, "content_type")
VALUES(11, 'video'::public."content_type");

/* Insert into user content table */
INSERT INTO user_content
(uid, content_id)
VALUES(1, 1);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 2);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 3);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 4);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 5);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 6);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 7);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 8);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 9);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 10);
INSERT INTO user_content
(uid, content_id)
VALUES(1, 11);

/* Insert into documents table */
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(1, 'https://arxiv.org/pdf/1711.07128.pdf%EF%BC%89%E5%B7%B2%E6%B7%BB%E5%8A%A0%E8%BF%9B%E6%9D%A5', 'Hello edge: Keyword spotting on microcontrollers', 2017);
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(2, 'https://arxiv.org/pdf/1904.03814', 'Temporal convolution for real-time keyword spotting on mobile devices', 2019);
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(3, 'https://arxiv.org/pdf/1704.03242', 'Automatic keyword extraction for text summarization: A survey', 2017);
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(4, 'https://arxiv.org/pdf/0901.0866', 'Folding@ Home and Genome@ Home: Using distributed computing to tackle previously intractable problems in computational biology', 2009);
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(5, 'https://arxiv.org/pdf/2006.15222', 'BERTology meets biology: interpreting attention in protein language models', 2020);
INSERT INTO "document"
(document_id, pdf_url, title, "year")
VALUES(6, 'https://arxiv.org/pdf/0807.0715', 'Atomic biology, electrostatics, and ionic channels', 2008);

/* Insert into document search table */
INSERT INTO document_search
(id, uid, document_id)
VALUES(1, 1, 1);
INSERT INTO document_search
(id, uid, document_id)
VALUES(2, 1, 2);
INSERT INTO document_search
(id, uid, document_id)
VALUES(3, 1, 3);
INSERT INTO document_search
(id, uid, document_id)
VALUES(4, 1, 4);
INSERT INTO document_search
(id, uid, document_id)
VALUES(5, 1, 5);
INSERT INTO document_search
(id, uid, document_id)
VALUES(6, 1, 6);

/* Insert into Author */

INSERT INTO author
(scholar_id, "name")
VALUES('7de84zoAAAAJ', 'Howard Y. Chang');
INSERT INTO author
(scholar_id, "name")
VALUES('AncHF6UAAAAJ', 'Naveen Suda');
INSERT INTO author
(scholar_id, "name")
VALUES('9SncsgUAAAAJ', 'Ching Lung Lai');
INSERT INTO author
(scholar_id, "name")
VALUES('vXB9eOwAAAAJ', 'Vimal Chandra srivastava');
INSERT INTO author
(scholar_id, "name")
VALUES('hP7pFF0AAAAJ', 'SooKyung Choi');
INSERT INTO author
(scholar_id, "name")
VALUES('fYGj43YAAAAJ', 'Seon-Hee Seo');
INSERT INTO author
(scholar_id, "name")
VALUES('bHOia00AAAAJ', 'Byungha Shin');
INSERT INTO author
(scholar_id, "name")
VALUES('hO8sR80AAAAJ', 'Byung Hee Hong');
INSERT INTO author
(scholar_id, "name")
VALUES('xHRnMs8AAAAJ', 'Martin Kersner');
INSERT INTO author
(scholar_id, "name")
VALUES('4LRScb8AAAAJ', 'Syamal Kumar Samanta');
INSERT INTO author
(scholar_id, "name")
VALUES('JhoUHs0AAAAJ', 'KS Babu');
INSERT INTO author
(scholar_id, "name")
VALUES('NsWwOtsAAAAJ', 'Sarah M. Larson');
INSERT INTO author
(scholar_id, "name")
VALUES('pIFgR6oAAAAJ', 'Christopher D. Snow');
INSERT INTO author
(scholar_id, "name")
VALUES('Ot5KMdEAAAAJ', 'Michael R. Shirts');
INSERT INTO author
(scholar_id, "name")
VALUES('OhuG0FcAAAAJ', 'Akhilesh Pandey, MD, Ph.D.');
INSERT INTO author
(scholar_id, "name")
VALUES('jkgpS0kAAAAJ', 'Jun Yu');
INSERT INTO author
(scholar_id, "name")
VALUES('X_g2RlsAAAAJ', 'Tariq A. Madani');
INSERT INTO author
(scholar_id, "name")
VALUES('JIJGu30AAAAJ', 'Lav R. Varshney');
INSERT INTO author
(scholar_id, "name")
VALUES('vaSdahkAAAAJ', 'Caiming Xiong');

/* Insert into document author */
INSERT INTO document_author
(document_id, author_id)
VALUES(1, '7de84zoAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(1, 'AncHF6UAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(1, '9SncsgUAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(1, 'vXB9eOwAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(2, 'hP7pFF0AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(2, 'fYGj43YAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(2, 'bHOia00AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(2, 'hO8sR80AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(2, 'xHRnMs8AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(3, '4LRScb8AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(3, 'JhoUHs0AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(4, 'NsWwOtsAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(4, 'pIFgR6oAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(4, 'Ot5KMdEAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(4, 'OhuG0FcAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(5, 'jkgpS0kAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(5, 'X_g2RlsAAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(5, 'JIJGu30AAAAJ');
INSERT INTO document_author
(document_id, author_id)
VALUES(5, 'vaSdahkAAAAJ');

/* Insert into Video */
INSERT INTO video
(video_id, title, description)
VALUES(7, 'test.wav', 'test desc');
INSERT INTO video
(video_id, title, description)
VALUES(8, 'testaudio1.mp3', '');
INSERT INTO video
(video_id, title, description)
VALUES(9, 'testaudio2.mp3', '');
INSERT INTO video
(video_id, title, description)
VALUES(10, 'testaudio3.wav', 'ddd');
INSERT INTO video
(video_id, title, description)
VALUES(11, 'testy.wav', 'eee');

/* Insert into summary table */
INSERT INTO summary
(summary_id, summary)
VALUES(1, 'test docment summary1');
INSERT INTO summary
(summary_id, summary)
VALUES(2, 'test docment summary2');
INSERT INTO summary
(summary_id, summary)
VALUES(3, 'test docment summary3');
INSERT INTO summary
(summary_id, summary)
VALUES(6, 'test docment summary6');
INSERT INTO summary
(summary_id, summary)
VALUES(5, 'test docment summary5');
INSERT INTO summary
(summary_id, summary)
VALUES(4, 'test docment summary4');
INSERT INTO summary
(summary_id, summary)
VALUES(7, 'test summary7');
INSERT INTO summary
(summary_id, summary)
VALUES(8, 'test summary8');
INSERT INTO summary
(summary_id, summary)
VALUES(9, 'test summary9');
INSERT INTO summary
(summary_id, summary)
VALUES(10, 'test summary10');
INSERT INTO summary
(summary_id, summary)
VALUES(11, 'test summary11');

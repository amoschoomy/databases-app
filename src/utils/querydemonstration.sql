/* Query Demonstration */

/* Aggregation Query */
SELECT COUNT(*)
FROM USER_CONTENT
WHERE uid = (
    SELECT uid
    FROM USERS
    WHERE oauth_id = 'auth0|646580b892e83c2d192e933a'
);

/* Update Query */
UPDATE SUMMARY
SET summary = 'Updated test summary'
WHERE summary_id = 1;

/* Group By Query */
SELECT d.year, COUNT(*) AS number_of_documents
FROM document d
JOIN document_search ds ON d.document_id = ds.document_id
WHERE ds.uid = (
    SELECT uid
    FROM USERS
    WHERE oauth_id = 'auth0|646580b892e83c2d192e933a'
)
GROUP BY d.year;

/* Join Query */
-- get_all_summaries_combined.sql

-- Query: Get all summaries for the user based on the provided OAuth ID
-- Replace :oauth_id with the actual OAuth ID value before executing
SELECT 
  CONTENT.content_id,
  COALESCE(DOCUMENT.title, VIDEO.title) AS title,
  SUMMARY.summary
FROM CONTENT
LEFT JOIN DOCUMENT ON CONTENT.content_id = DOCUMENT.document_id
LEFT JOIN VIDEO ON CONTENT.content_id = VIDEO.video_id
INNER JOIN SUMMARY ON CONTENT.content_id = SUMMARY.summary_id
INNER JOIN USER_CONTENT ON CONTENT.content_id = USER_CONTENT.content_id
WHERE USER_CONTENT.uid = (
    SELECT uid
    FROM USERS
    WHERE oauth_id = 'auth0|646580b892e83c2d192e933a'
);

/* Delete With Cascade Query */
DELETE FROM CONTENT
WHERE content_id = 2;


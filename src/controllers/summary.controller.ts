import * as summaryAPI from '../api/summary.api'

export class SummaryController {
    static async retrieveDocumentsAPI(req: any, res: any) {
        try {
            const uid = req.body.uid;
            const keyword = req.body.keyword;
            const documents = await summaryAPI.retrieveDocuments(uid, keyword);
            res.status(200).json({ documents });
        } catch (error: any) {
            res.status(500).json({ message: error.toString() });
        }
    }

    static async summariseDocumentAPI(req: any, res: any) {
        try {
            const uid = req.body.uid;
            const document_id = req.body.document_id;
            const summary = await summaryAPI.summariseDocument(uid, document_id);
            res.status(200).json({ summary });
        } catch (error: any) {
            res.status(500).json({ message: error.toString() });
        }
    }

    static async retrieveVideoSummaryAPI(req: any, res: any) {
        try {
            const uid = req.body.uid;
            const video_file = req.body.file.files[0] // handle with express file upload
            const video_description = req.body.description
            const summaries = await summaryAPI.summariseVideo(uid,video_file,video_description);
            res.status(200).json({ summaries });
        } catch (error: any) {
            res.status(500).json({ message: error.toString() });
        }
    }
}
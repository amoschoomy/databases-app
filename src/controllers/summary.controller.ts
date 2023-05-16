import * as summaryAPI from '../api/summary.api';

export class SummaryController {
  static async retrieveDocumentsAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      console.log(uid);
      const keyword = req.body.keyword;
      const documents = await summaryAPI.retrieveDocuments(uid, keyword);
      res.status(200).json(documents);
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async summariseDocumentAPI(req: any, res: any) {
    try {
      const document_id = req.body.document_id;
      const summary = await summaryAPI.summariseDocument(document_id);
      res.status(200).json({ summary });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async retrieveVideoSummaryAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const video_file = req.body.file.files[0]; // handle with express file upload
      const video_description = req.body.description;
      const summary = await summaryAPI.summariseVideo(
        uid,
        video_file,
        video_description,
      );
      res.status(200).json({ summary});
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async deleteDocumentAPI(req: any, res: any) {
    try {
      const document_id = req.body.document_id;
      await summaryAPI.deleteDocument(document_id);
      res.status(200).json({ status: "Deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async deleteVideoAPI(req: any, res: any) {
    try {
      const video_id = req.body.video_id;
      await summaryAPI.deleteVideo(video_id);
      res.status(200).json({ status: "Deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async regenerateDocumentSummaryAPI(req: any, res: any) {
    try {
      const document_id = req.body.document_id;
      const summary = await summaryAPI.regenerateSummary(document_id);
      res.status(200).json({ summary });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async countTotalSummaryAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const totalNo = await summaryAPI.countTotalSummary(uid);
      res.status(200).json({ totalNo });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async countTotalVideoAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const totalVideoCount = await summaryAPI.countTotalVideo(uid);
      res.status(200).json({ totalVideoCount });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async countTotalDocumentAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const total = await summaryAPI.countTotalDocument(uid);
      res.status(200).json({ total });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async groupDocumentsByYearAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const documents = await summaryAPI.groupDocumentsByYear(uid);
      res.status(200).json({ documents });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }
}

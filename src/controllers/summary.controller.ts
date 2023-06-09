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
      res.status(200).send(summary);
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.toString() });
    }
  }

  static async retrieveVideoSummaryAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const video_file = req.file; // Access the file's Buffer
      const video_description = req.body.audio_description;

      const summary = await summaryAPI.summariseVideo(
        uid,
        video_file,
        video_description,
      );

      res.status(200).send(summary);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

static async deleteContentAPI (req: any, res: any) {
  try {
    const content_id = req.query.content_id;

    console.log(content_id);
    await summaryAPI.deleteContent(content_id);
    res.status(200).json({ status: 'Deleted successfully' });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.toString() });
  }
}

  static async updateSummaryAPI(req: any, res: any) {
    try {
      const content_id = req.body.content_id;
      const new_summary = req.body.new_summary;
      await summaryAPI.updateSummary(new_summary, content_id);
      res.status(200).json({ status: 'Updated successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.toString() });
    }
  }

  static async countTotalSummaryAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const totalNo = await summaryAPI.countTotalSummary(uid);
      res.status(200).send(totalNo);
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.toString() });
    }
  }

  static async groupDocumentsByYearAPI(req: any, res: any) {
    try {
      const uid = req.body.uid;
      const documents = await summaryAPI.groupDocumentsByYear(uid);
      res.status(200).json({ documents });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.toString() });
    }
  }
}

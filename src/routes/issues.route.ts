import { Router } from 'express';
import IssuesService from '../service/issues';
import { addIssuesValidator, updateIssuesValidator } from '../middlewares/issuesValidator';

const issuesRouter = Router();
const issueService = new IssuesService();

issuesRouter.get('/', issueService.getIssues);
issuesRouter.get('/:id', issueService.getIssue);
issuesRouter.post('/', addIssuesValidator(), issueService.createIssues);
issuesRouter.put('/:id', updateIssuesValidator(), issueService.updateIssues);

export default issuesRouter;

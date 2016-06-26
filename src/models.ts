// we don't use typescript here. So it's just a tip
interface Comment {
    id: string;
    text: string;
    offsetTop: number;
    textStart: number;
    textEnd: number;
    paragraphId: string;
    createdAt: number;
}

interface Paragraph {
    id: string;
    text: string;
}

interface State {
    comments: Comment[];
    // comment ID
    activeComment: string;
    selection?: Comment;
    paragraphs: Paragraph[];
}

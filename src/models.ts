// we don't use typescript here. So it's just a tip
interface Comment {
	id: string;
    text: string;
    offsetTop: number;
    textStart: number;
    textEnd: number;
	paragraphId: string;
}

interface Paragraph {
	id: string;
	text: string;
}

interface State {
	comments: Comment[];
	activeComment: string;
	addComment?: Comment;
	paragraphs: Paragraph[];
}

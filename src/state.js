export const STORAGE_NAME = 'story-editor-comments';


let comments = window.localStorage.getItem(STORAGE_NAME);

comments = comments ? JSON.parse(comments) : [];

export const initialState = {
    selection: null,
    activeComment: null,
    comments,
    savedToStorageAt: null,

   	paragraphs: [
		{
			id: '1',
			text: 'Hackathon in Yandex. How it was',
		},
		{
			id: '2',
			text: `A week ago I took part in the hackathon in Yandex. It was a small and local(for Yandex) one, only
	for yandexoids and friends. It was a very technical hackathon about tools for developers like loaders, builders, template
	engines. So developers were doing something for themselves.`,
		},
		{
			id: '3',
			text: `So how did I get there if I’m not a yandexoid — my college Anton invited me because we were doing
stuff related to Yandex on my current job. It’s an interesting project — I’ll say a few words about it later — but I couldn’t
find time for it because of other duties. So this hackathon became a great opportunity to find the time and complete the project.`
		},
		{
			id: '4',
			text: `A few words about our project. BEMXJST is a declarative template engine, very flexible and powerful.
So you can describe some structures using logic and domain-specific functions. Also, there is another engine BEMHTML
that takes BEMXJST-templates and BEMJSON(simply a subset of JSON) and after some magic we get HTML. So on my current
job we have a library of UI components that uses BEMXJST and BEMHTML. We also have a library based on React renderer.
The libraries have to be equal in functionality and appearance — so there has to be no difference for users. The main
idea is somehow to tell React-lib to use BEMXJST-templates in its render function. This will give us the ability to
develop markup in one place and not copy-paste it. It’s possible to implement another engine that works like BEMHTML
but outputs data structures fittable for creating virtual-DOM. That’s how the React render function works — it doesn’t
produce a real DOM but a structure that describes DOM so it can compare it with the real one and then decide is it
required to update the real DOM. That’s why we called our engine VIDOM.`
		},
		{
			id: '5',
			text: `Before the hackathon, we checked the idea and created some POC and I can say that it was almost
ready and almost all the tests were green. But the code base was awful and there were bugs and we didn’t check all
the edge cases. So the goal for the hackathon was to complete the project and make it possible to merge into upstream.`
		},
		{
			id: '6',
			text: `I love hackathons because of their magic. Just imagine the Saturday morning, you want to relax and
your body is tired and then you came to the place with a lot of people who are also tired but they want to work and
they have the ideas and passion for doing it and it’s really the thing that motivates me. So I was full of energy for
the whole weekend. Also, it’s a great pleasure to hang out and just work together, it’s great fun definitely.`
		},
		{
			id: '7',
			text: `This particular hackathon was great for me because it was about tools and I’m interested in it. I
like that there were no prizes or ratings or stuff like that. I believe that money or other prizes break the idea because
what really matters is the pleasure of doing some stuff with friends and what you get at the end. And this is the real prize.
I also felt the engineering culture that exists in Yandex and it’s great.`
		},
		{
			id: '8',
			text: `Finally, we’ve done our tasks and created a pull request for the main project.
More detail here in Russian https://github.com/bem/bem-forum-content-ru/issues/961.`
		},
    ]
};

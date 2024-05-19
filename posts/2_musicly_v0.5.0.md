Dear Musicly users,

A year later, a new Musicly update is here. I'm sorry to keep you waiting for so long.

I've got a busy life and that surely played a role. Other events and projects have put Musicly on hold for a while. And, to be sure, I also procrastinated for a while... But there's a bigger reason: Musicly's code was flawed from the very beginning.

I've made no attempt to hide my lack of experience when I first built Musicly. Looking back at my old code, only two years later, I'm stunned. Wow, was it me!? Pretty much everything deserves a cleanup, not to mention the terrible state management and the fact that I used JavaScript instead of TypeScript. On the other hand, I'm impressed that someone so unexperienced could pull out a working app - and, in my *unbiased* opinion, a good one ;)

The one thing that upsets me the most is the use of JavaScript instead of TypeScript. When I first programmed Musicly, I was only vaguely aware of the existence of TypeScript and the idea of using it scared me a little. But, ah!, that hurts my future self. A couple of serious bugs in previous Musicly versions could have been avoided if only TS was used (including one that crashed the app).

Faced with the unmantainability of my code, I fell victim of the urge to rewrite code. Not one or two files, but the whole app. But then I thought: I always come up with new ideas for apps and have to copy the whole code, change names, etc. Why not build something modularized that can be reused? I wound up building another app to test everything out and lost a huge ammount of time trying to perfect that one. In short, the project of rewriting everything was too ambitious... In the meantime I became aware of some bugs in Musicly's current version which had to be fixed. Thus, the current version feautres only minor improvements and some bug fixes and further changes will have to wait.

But, on a positive note, this whole story has taught me that changes should occur gradually. My plan is to deal with the above issues one at a time. I'll start with transitioning into Typescript and move on to the other issues.

There's another reason for the delay: the lack of gapless playback on Musicly was bothering me for a long time now. Longtime Musicly users will know that and about my failed attemps to fix it. This time, though, I was really conviced I had it right with the Gapless5 package. But, alas, it was buggy and I had to give up on it - it's better to have a working app than a buggy one. Some further attemps were made using JS's `setTimeout()` function, but they were also unsuccessful. Thus, let me announce it once and for all: gapless playback will not be supported in Musicly in the near future. If you want gapless playback, you'll have to use another app.

And that's it for now. Despite all the errors I've made, I'm actually very happy to have Musicly back on track. I hope you enjoy it as much as I do!

Bogosorter

`luiswbarbosa@gmail.com`
export function load({ url }) {
    let result = url.searchParams.get('result') || 'default';
    console.log(result);

    let ogTitle, ogDescription, ogImage;

    // Set dynamic Open Graph tags or other content based on the result
    if (result === 'fri') {
        ogTitle = "👏👏 NOT HERE TO MAKE FRIENDS 👏👏 - The Corporate Trail";
        ogDescription = "I’m efficient, strategic, and I’ve kept distractions at bay. I’d prefer coworkers not bother me, but if they must, they need to make it actionable.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-friends_share.jpg';
    } else if (result === 'bos') {
        ogTitle = "🤝🧳 I MANAGE LIKE A BOSS 🤝🧳 - The Corporate Trail";
        ogDescription = "I have an innate ability to inspire my colleagues and herd them toward a common goal.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-boss_share.jpg';
    } else if (result === 'bel') {
        ogTitle = "💗💗 I AM BELOVED 💗💗 - The Corporate Trail";
        ogDescription = "People trust that I’ve got their back. My calendar tends to fill up with gratuitous coffee chats and one-on-ones.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-beloved_share.jpg';
    } else if (result === 'out') {
        ogTitle = "🏃💨 JUST HEADING OUT 🏃💨 - The Corporate Trail";
        ogDescription = "Oh, a last-minute Zoom meeting? Sorry, I’ll have to circle back. Some call it a healthy work-life balance, I call it self-preservation.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-out_share.jpg';
    } else if (result === 'vio') {
        ogTitle = "🔪🔪 I CHOSE VIOLENCE 🔪🔪 - The Corporate Trail";
        ogDescription = "For me to win, someone else has to lose. So what if I stab a teammate in the back? There are no teams on The Corporate Trail. ";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-violence_share.jpg';
    } else if (result === 'pro') {
        ogTitle = "💸🩸 I BLEED FOR PROFIT 💸🩸 - The Corporate Trail";
        ogDescription = "I’ve hit revenue targets by missing weekends and weddings while pounding triple-shot espressos and gas station No-Doze.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-profit_share.jpg';
    } else if (result === 'gre') {
        ogTitle = "🧯🔥 I AM THE RESIDENT FIREFIGHTER 🧯🔥 - The Corporate Trail";
        ogDescription = "I solve all sorts of problems — even the ones I have nothing to do with.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-fire_share.jpg';
    } else if (result === 'got') {
        ogTitle = "👑👑 I GAME OF THRONES'D IT 👑👑 - The Corporate Trail";
        ogDescription = "My feel for office politics is frighteningly sharp — I’ve outmaneuvered everyone and survived all power plays.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-thrones_share.jpg';
    } else if (result === 'qui') {
        ogTitle = "🦎🦎 I QUIT 🦎🦎 - The Corporate Trail";
        ogDescription = "Spend the best years of my life “circling back” over stale office coffee? No thanks. Time to pack it up, blow it up, and move to Costa Rica.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-quit_share.jpg'; 
    } else {
        ogTitle = "THE CORPORATE TRAIL (A workplace survival game by Chief)";
        ogDescription = "Think you’ve got what it takes to survive the workplace as a woman executive? It’s time to hit The Corporate Trail and find out.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-violence.jpg';
    }

    return {
        ogTitle,
        ogDescription,
        ogImage
    };
}
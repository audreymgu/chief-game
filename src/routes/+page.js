export function load({ url }) {
    let result = url.searchParams.get('result') || 'default';
    console.log(result);

    let ogTitle, ogDescription, ogImage;

    // Set dynamic Open Graph tags or other content based on the result
    if (result === 'fri') {
        ogTitle = "👏👏 NOT HERE TO MAKE FRIENDS 👏👏 - The Corporate Trail";
        ogDescription = "Water cooler talk was never your thing. You’d prefer coworkers not bother you, but if they must, they need to make it actionable.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-friends_share.jpg';
    } else if (result === 'bos') {
        ogTitle = "🤝🧳 I MANAGE LIKE A BOSS 🤝🧳 - The Corporate Trail";
        ogDescription = "You have an innate ability to herd your colleagues toward a common goal. Have you considered starting a cult?";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-boss_share.jpg';
    } else if (result === 'bel') {
        ogTitle = "💗💗 I AM BELOVED 💗💗 - The Corporate Trail";
        ogDescription = "People like working with you. They tend to think you’re on their side—and they’re right. You probably get hit up on LinkedIn a lot.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-beloved_share.jpg';
    } else if (result === 'out') {
        ogTitle = "🏃💨 JUST HEADING OUT 🏃💨 - The Corporate Trail";
        ogDescription = "Oh, a bunch of stakeholders are jumping on a quick Teams to chat through action items? Sorry, you’ll have to circle back.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-out_share.jpg';
    } else if (result === 'vio') {
        ogTitle = "🔪🔪 I CHOSE VIOLENCE 🔪🔪 - The Corporate Trail";
        ogDescription = "For you to win, someone else has to lose. Call it a competitive spirit. You either played D1 athletics or too much Monopoly.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-violence_share.jpg';
    } else if (result === 'pro') {
        ogTitle = "💸🩸 I BLEED FOR PROFIT 💸🩸 - The Corporate Trail";
        ogDescription = "You’re a hero of free market enterprise. You don’t stop until the work is done, and value is safely returned to shareholders.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-profit_share.jpg';
    } else if (result === 'gre') {
        ogTitle = "🧯🔥 I AM THE EXECUTIVE FIREFIGHTER 🧯🔥 - The Corporate Trail";
        ogDescription = "You solve all sorts of problems — even the ones you have nothing to do with. People appreciate your dependability, but after fighting so many dumpster fires, you’re at risk of burning out.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-fire_share.jpg';
    } else if (result === 'got') {
        ogTitle = "👑👑 I GAME OF THRONES'D IT 👑👑 - The Corporate Trail";
        ogDescription = "Your feel for office politics is as honed as it is frightening. Maybe you should look into actual politics.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-thrones_share.jpg';
    } else if (result === 'qui') {
        ogTitle = "🦎🦎 I QUIT 🦎🦎 - The Corporate Trail";
        ogDescription = "Spend your best years saying shit like “circle back” while drinking a watery K-Cup? No thanks. Time to abscond to Costa Rica and become an iguana tamer.";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-quit_share.jpg'; 
    } else {
        ogTitle = "THE CORPORATE TRAIL";
        ogDescription = "A corporate survival game by Chief";
        ogImage = 'https://thecorporatetrail.chief.com/img/e-violence.jpg';
    }

    return {
        ogTitle,
        ogDescription,
        ogImage
    };
}
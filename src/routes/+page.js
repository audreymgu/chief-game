export function load({ url }) {
    let result = url.searchParams.get('result') || 'default';
    console.log(result);

    let ogTitle, ogDescription, ogImage;

    // Set dynamic Open Graph tags or other content based on the result
    if (result === 'fri') {
        ogTitle = "👏👏 NOT HERE TO MAKE FRIENDS 👏👏 - The Corporate Trail";
        ogDescription = "Water cooler talk was never your thing. You’d prefer coworkers not bother you, but if they must, they need to make it actionable.";
        ogImage = 'https://chief-game.vercel.app/img/e-friends.jpg';
    } else if (result === 'bos') {
        ogTitle = "🔪🔪 YOU MANAGE LIKE A BOSS 🔪🔪 - The Corporate Trail";
        ogDescription = "You have an innate ability to herd your colleagues toward a common goal. Have you considered starting a cult?";
        ogImage = 'https://chief-game.vercel.app/img/e-boss.jpg';
    } else if (result === 'bel') {
        ogTitle = "💗💗 YOU ARE BELOVED 💗💗 - The Corporate Trail";
        ogDescription = "People like working with you. They tend to think you’re on their side—and they’re right. You probably get hit up on LinkedIn a lot.";
        ogImage = 'https://chief-game.vercel.app/img/e-beloved.jpg';
    } else if (result === 'out') {
        ogTitle = "🏃💨 JUST HEADING OUT 🏃💨 - The Corporate Trail";
        ogDescription = "Oh, a bunch of stakeholders are jumping on a quick Teams to chat through action items? Sorry, you’ll have to circle back.";
        ogImage = 'https://chief-game.vercel.app/img/e-out.jpg';
    } else if (result === 'vio') {
        ogTitle = "🔪🔪 YOU CHOSE VIOLENCE 🔪🔪 - The Corporate Trail";
        ogDescription = "For you to win, someone else has to lose. Call it a competitive spirit. You either played D1 athletics or too much Monopoly.";
        ogImage = 'https://chief-game.vercel.app/img/e-violence.jpg';
    } else if (result === 'pro') {
        ogTitle = "💸🩸 YOU BLEED FOR PROFIT 💸🩸 - The Corporate Trail";
        ogDescription = "You’re a hero of free market enterprise. You don’t stop until the work is done, and value is safely returned to shareholders.";
        ogImage = 'https://chief-game.vercel.app/img/e-profit.jpg';
    } else if (result === 'gre') {
        ogTitle = "💜💜 YOU JUMP ON GRENADES 💜💜 - The Corporate Trail";
        ogDescription = "Whatever the problem, you make it your own. Nobody asks you to do this, but you like to imagine that someone, somewhere is keeping score.";
        ogImage = 'https://chief-game.vercel.app/img/placeholder.png';
    } else if (result === 'got') {
        ogTitle = "👑👑 YOU GAME OF THRONES'D IT 👑👑 - The Corporate Trail";
        ogDescription = "Your feel for office politics is as honed as it is frightening. Maybe you should look into actual politics.";
        ogImage = 'https://chief-game.vercel.app/img/e-thrones.jpg';
    } else if (result === 'qui') {
        ogTitle = "🦎🦎 YOU QUIT 🦎🦎 - The Corporate Trail";
        ogDescription = "Spend your best years saying shit like “circle back” while drinking a watery K-Cup? No thanks. Time to abscond to Costa Rica and become an iguana tamer.";
        ogImage = 'https://chief-game.vercel.app/img/e-quit.jpg'; 
    } else {
        ogTitle = "SURVIVE THE CORPORATE TRAIL";
        ogDescription = "A corporate survival game by Chief";
        ogImage = 'https://chief-game.vercel.app/img/e-violence.jpg';
    }

    return {
        ogTitle,
        ogDescription,
        ogImage
    };
}
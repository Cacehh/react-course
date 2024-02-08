console.log("app.js loaded!");

// JSX - JavaScript XML

const user = {
    name: 'Cayce Dy',
    age: '27',
    location: 'Philippines',
    languages: ['English', 'Filipino', 'Mandarin', 'Korean']
};

const template = (
    <div class="container">
        <h1>The Investors Podcast</h1>
        <p>Do ad amet aliqua duis ad adipisicing pariatur pariatur id. Amet elit ipsum ea exercitation irure ex ipsum sint Lorem velit minim nisi exercitation dolor. Ad officia labore quis sunt consectetur ullamco mollit incididunt nisi ex sint qui sit eu. Cillum commodo incididunt ad culpa est. Enim dolor voluptate dolor aliqua officia magna irure. Amet eiusmod veniam in velit anim ullamco enim.</p>
    </div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } else {
        return 'Unknown';
    }
}

function getLanguages(languages) {

}

const templateTwo = (
    <div>
        <h1>The Investors Podcast - {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        {getLanguages(user.languages)}
        {user.languages.length > 0 && <p>Languages Known: {user.languages.length}</p>}
        <p>
            Ea in incididunt aliqua adipisicing aute ea.
            Ipsum fugiat id nulla aliqua do aute ullamco sunt. Laboris irure fugiat ipsum quis. Cupidatat sint excepteur aliqua incididunt.
        </p>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
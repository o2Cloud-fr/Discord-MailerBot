
# Discord-MailerBot

Discord Mailer Bot, your versatile assistant for sending emails directly from your Discord server! This innovative bot seamlessly integrates robust email sending capabilities via the SMTP protocol directly into the user-friendly environment of Discord.

## Authors

- [@MyAlien](https://www.github.com/MyAlien)
- [@o2Cloud](https://www.github.com/o2Cloud-fr )

## Screenshots
Sendmail Embed
![App Screenshot](https://i.imgur.com/xERB3Ji.png)

Prompt
![App Screenshot](https://i.imgur.com/plGXNtD.png)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-o2Cloud-yellow.svg)]()


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Deployment

To deploy this project run

```bash
  npm install @discordjs/builders@^0.8.2 @discordjs/rest@^0.1.0-canary.0 discord-api-types@^0.24.0 discord.js@^13.3.1 discord.js-commando@^0.12.3 nodemailer@^6.9.11
```
Run Bot
```bash
  node app.js
```
## KEY API Discord

Please modify your SMTP server in app.js and then add your tokens in the config.json file.

config.json
```
clientId
token
```
app.js
```
host: 'smtp.exemple.com',

port: 465, // Or the port that your SMTP server uses.

secure: true, // False if your SMTP server does not require a secure connection.

user: 'mailaddress@exemple.com',

pass: 'P@ssw0rd'

from: 'mailaddress@exemple.com',
```
**You can use our iLockMail messaging service.**

https://ilockmail.fr/

**You can create your email address in just a few minutes, complete with an SMTP server.**

## Feedback

If you have any feedback, please reach out to us at github@o2cloud.fr


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vcard.o2cloud.fr/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/remi-simier-2b30142a1/)


## 🛠 Skills
Javascript, Nodejs .


## Installation

Install Discord-MailerBot with npm

```bash
  npm install @discordjs/builders@^0.8.2 @discordjs/rest@^0.1.0-canary.0 discord-api-types@^0.24.0 discord.js@^13.3.1 discord.js-commando@^0.12.3 nodemailer@^6.9.11
  node app.js
```
    
## License

[Apache-2.0 license](https://github.com/o2Cloud-fr/Discord-MailerBot/blob/main/LICENSE)


![Logo](https://o2cloud.fr/logo/o2Cloud.png)


## Related

Here are some related projects

[Awesome README](https://github.com/o2Cloud-fr/Discord-MailerBot/blob/main/README.md)


## Roadmap

- Additional browser support

- Add more integrations


## Support

For support, email github@o2cloud.fr or join our Slack channel.


## Tech Stack

**Server:** Node


## Used By

This project is used by the following companies:

- o2Cloud
- MyAlienTech


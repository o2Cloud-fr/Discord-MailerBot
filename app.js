const { Client, Intents, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const { token } = require('./config.json');
const nodemailer = require('nodemailer');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Configuration de nodemailer avec votre propre serveur SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.exemple.com',
    port: 465, // ou le port que votre serveur SMTP utilise
    secure: true, // false si votre serveur SMTP ne requiert pas de connexion sécurisée
    auth: {
        user: 'mailaddress@exemple.com',
        pass: 'P@ssw0rd'
    }
});

// Définir les commandes slash
const commands = [
    new SlashCommandBuilder()
        .setName('sendmail')
        .setDescription('Envoie un e-mail à l\'adresse spécifiée')
        .addStringOption(option =>
            option.setName('destinataire')
                .setDescription('L\'adresse e-mail du destinataire')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('sujet')
                .setDescription('Le sujet de l\'e-mail')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('contenu')
                .setDescription('Le contenu de l\'e-mail')
                .setRequired(true))
];

// Configurer les commandes slash
client.on('ready', async () => {
    const commandList = await client.guilds.cache.get('IDCHANNEL').commands.set(commands);
    console.log(commandList);
});

// Gérer les commandes slash
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'sendmail') {
        // Extraire les options
        const to = options.getString('destinataire');
        const subject = options.getString('sujet');
        const content = options.getString('contenu');

        // Vérifier si tous les arguments nécessaires sont fournis
        if (!to || !subject || !content) {
            return interaction.reply("Usage: /sendmail <destinataire> <sujet> <contenu>");
        }

        // Configurer l'e-mail à envoyer
        const mailOptions = {
            from: 'bot.discord@ilockmail.fr',
            to: to,
            subject: subject,
            //text: content + '\n\nCeci est un texte supplémentaire.'
            html: '<p>' + content + '</p><i>Envoyer depuis le discord de MyAlienTech.</i> </br> <img src="https://ilockmail.fr/assets/logo/logo.webp" alt="Celmix" width="100" height="100">'
        };

        // Envoyer l'e-mail
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                interaction.reply('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
            } else {
                console.log('Email envoyé: ' + info.response);
                // Intégrer l'embed dans la réponse
                const embed = new MessageEmbed()
                    .setColor(0x0099FF)
                    .setTitle('L\'e-mail a été envoyé avec succès.')
                    .setAuthor('/sendmail', 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png', 'https://discord.js.org')
                    .setThumbnail('https://cdn-icons-png.freepik.com/512/9916/9916040.png')
                    .setTimestamp()
                    .setFooter('Commande sendmail exécutée', 'https://png.pngtree.com/png-vector/20221229/ourmid/pngtree-command-line-png-image_6542283.png');

                interaction.reply({ embeds: [embed], content: 'L\'e-mail a été envoyé avec succès.' });
            }
        });
    }
});

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('📨 Agent-SendMail', { type: 'PLAYING' });

    // Démarre le bot puis envoie un message sur le General
    const generalChannel = client.channels.cache.find(channel => channel.name === '💬⥐general');
    if (generalChannel) {
        generalChannel.send('Je suis en ligne maintenant !\nInutile de me mentionner !😅```Agent SendMail\nVersion 1.0```');
    } else {
        console.error('Le canal 💬⥐general n\'a pas été trouvé.');
    }
});

client.login(token);
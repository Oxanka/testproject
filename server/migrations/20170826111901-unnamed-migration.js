'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            'group',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: Sequelize.STRING,
                shortInformation: Sequelize.STRING,
                moreInformation: Sequelize.TEXT,
                active: {
                    type: Sequelize.INTEGER,
                    defaultValue: 1
                }
            },
            {
                charset: 'utf8',
            }
        ).then(function(){
            queryInterface.createTable(
                'participant',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: Sequelize.STRING,
                    surname: Sequelize.STRING,
                    email: Sequelize.STRING,
                    phone: Sequelize.STRING,
                    active: {
                        type: Sequelize.INTEGER,
                        defaultValue: 1
                    }
                },
                {
                    charset: 'utf8',
                }
            );
        })
            .then(function(){
                queryInterface.createTable(
                    'participantingroup',
                    {
                        id: {
                            type: Sequelize.INTEGER,
                            primaryKey: true,
                            autoIncrement: true
                        },
                        ifParticipant: Sequelize.INTEGER,
                        idGroup: Sequelize.INTEGER,
                        active: {
                            type: Sequelize.INTEGER,
                            defaultValue: 1
                        }
                    },
                    {
                        charset: 'utf8',
                    }
                )
            })



    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('group')
            .then(function () {
                queryInterface.dropTable('participant');
            }).then(function () {
                queryInterface.dropTable('participantingroup');
            })
    }
};

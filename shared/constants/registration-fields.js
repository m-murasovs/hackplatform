const yup = require('yup');
const Genders = require('../constants/genders');
const Countries = require('../constants/countries');
const Languages = require('../constants/languages');
const Industries = require('../constants/industries');
const Themes = require('../constants/themes');
const Roles = require('../constants/roles');
const Skills = require('../constants/skills');
const Misc = require('../constants/misc');
const FieldTypes = require('./field-types');
const FilterTypes = require('./filter-types');
const FilterValues = require('./filter-values');

const Categories = {
    basicDetails: {
        label: 'Basic Details',
        order: 1
    },
    skillsAndInterests: {
        label: 'Skills & Interests',
        order: 2
    },
    links: {
        label: 'Links',
        order: 3
    },
    travelAndAccommodation: {
        label: 'Travel & Accommodation',
        order: 4
    },
    recruitment: {
        label: 'Opportunities',
        order: 5
    },
    other: {
        label: 'Other',
        order: 6
    }
};

const FieldProps = {
    firstName: {
        label: 'First name',
        hint: '',
        hintMarkdown: false,
        placeholder: 'Herbert',
        fieldType: FieldTypes.SHORT_TEXT,
        colSize: 12,
        userProfileConfig: {
            type: String,
            required: true,
            trim: true
        },
        schemaConfig: {
            defaultEnable: true,
            defaultRequire: true,
            editable: false
        },
        filters: [
            {
                path: '',
                label: 'First name',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    lastName: {
        label: 'Last name',
        hint: '',
        hintMarkdown: false,
        placeholder: 'Hacker',
        colSize: 12,
        fieldType: FieldTypes.SHORT_TEXT,
        userProfileConfig: {
            type: String,
            required: true,
            trim: true
        },
        schemaConfig: {
            defaultEnable: true,
            defaultRequire: true,
            editable: false
        },
        filters: [
            {
                path: '',
                label: 'Last name',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    email: {
        label: 'Email',
        hint: '',
        hintMarkdown: false,
        placeholder: 'herbert.hacker@bighackathon.com',
        fieldType: FieldTypes.EMAIL,
        userProfileConfig: {
            type: String,
            required: true,
            trim: true
        },
        schemaConfig: {
            defaultEnable: true,
            defaultRequire: true,
            editable: false
        },
        filters: [
            {
                path: '',
                label: 'Email',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    phoneNumber: {
        label: 'Phone number',
        hint: '',
        hintMarkdown: false,
        fieldType: FieldTypes.PHONE_NUMBER,
        userProfileConfig: {
            country_code: {
                type: String,
                enum: Countries.asArrayOfPhoneCodes
            },
            number: String
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    dateOfBirth: {
        label: 'Date of Birth',
        hint: 'Please note that you must be at least 16 years old to register for this event',
        hintMarkdown: false,
        placeholder: 'Select date',
        fieldType: FieldTypes.DATE,
        userProfileConfig: {
            type: Date
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Date of birth',
                type: FilterTypes.DATE,
                valueType: FilterValues.DATE
            }
        ]
    },
    gender: {
        label: 'Gender',
        hint: '',
        hintMarkdown: false,
        fieldType: FieldTypes.GENDER,
        userProfileConfig: {
            type: String,
            enum: Genders
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Gender',
                type: FilterTypes.STRING,
                valueType: FilterValues.GENDER
            }
        ]
    },
    nationality: {
        label: 'Nationality',
        hint: '',
        hintMarkdown: false,
        fieldType: FieldTypes.NATIONALITY,
        userProfileConfig: {
            type: String,
            enum: Countries.asArrayOfNationalities
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Nationality',
                type: FilterTypes.STRING,
                valueType: FilterValues.NATIONALITY
            }
        ]
    },
    spokenLanguages: {
        label: 'Spoken languages',
        hint: 'Select all languages that you speak with working proficiency',
        hintMarkdown: false,
        fieldType: FieldTypes.LANGUAGES,
        userProfileConfig: [
            {
                type: String,
                enum: Languages.asArrayOfNames
            }
        ],
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Spoken languages',
                type: FilterTypes.ARRAY,
                valueType: FilterValues.LANGUAGE
            }
        ]
    },
    countryOfResidence: {
        label: 'Country of residence',
        hint: 'Which country are you currently living in?',
        hintMarkdown: false,
        fieldType: FieldTypes.COUNTRY,
        userProfileConfig: {
            type: String,
            enum: Countries.asArrayOfName
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Country of Residence',
                type: FilterTypes.STRING,
                valueType: FilterValues.COUNTRY
            }
        ]
    },
    cityOfResidence: {
        label: 'City of residence',
        hint: 'Which city are you currently living in?',
        hintMarkdown: false,
        placeholder: 'Hackerville',
        fieldType: FieldTypes.SHORT_TEXT,
        userProfileConfig: {
            type: String,
            trim: true
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    tShirtSize: {
        label: 'T-shirt size',
        hint: '',
        hintMarkdown: false,
        fieldType: FieldTypes.T_SHIRT_SIZE,
        userProfileConfig: {
            type: String,
            enum: Misc.tShirtSizes
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    dietaryRestrictions: {
        label: 'Dietary Restrictions',
        hint:
            'Please select all dietary restrictions from the below list that apply to you - if none of the available options apply, you can leave this field empty.',
        hintMarkdown: false,
        fieldType: FieldTypes.DIETARY_RESTRICTIONS,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    headline: {
        label: 'Headline',
        hint: 'In one sentence, who are you / what do you do?',
        hintMarkdown: false,
        fieldType: FieldTypes.SHORT_TEXT,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        userProfileConfig: {
            type: String,
            trim: true
        }
    },
    biography: {
        label: 'Biography',
        hint:
            "Add a bit of personal touch to your profile by writing a little bit more about yourself and what you do. Especially if you're looking to catch the attention of some of our recruiting partners and get hired, this is a good chance to stand out from the crowd!",
        hintMarkdown: false,
        fieldType: FieldTypes.LONG_TEXT,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        userProfileConfig: {
            type: String,
            trim: true
        }
    },
    roles: {
        label: 'Roles',
        hint:
            'Add up to 5 roles you have working experience in. You can type into the field to search for a specific role, or filter by category by typing "Design", "Dev", "Business" or "Other".',
        hintMarkdown: false,
        fieldType: FieldTypes.ROLES,
        userProfileConfig: [
            {
                role: {
                    type: String,
                    enum: Roles.items
                },
                years: {
                    type: Number,
                    min: 1,
                    max: 5
                }
            }
        ],
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    skills: {
        label: 'Skills',
        hint: `
            Add up to 10 skills you consider yourself to be proficient at. Choose a level of experience that best describes your current
            level of proficiency in that skill. You can click on the experience level options to see the description for that level. 
            The skills are divided into four categories: Abstract Skills, Programming Languages, Programming Frameworks & Tools and Tools & Software - 
            you can type the name of a category to only see skills related to that category.
        `,
        hintMarkdown: false,
        fieldType: FieldTypes.SKILLS,
        userProfileConfig: [
            {
                skill: {
                    type: String,
                    enum: Skills.items
                },
                level: {
                    type: Number,
                    min: 1,
                    max: 5
                }
            }
        ],
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    industriesOfInterest: {
        label: 'Industries of Interest',
        hint: 'Choose up to 3 industries that are the most interesting to you',
        hintMarkdown: false,
        fieldType: FieldTypes.INDUSTRIES,
        userProfileConfig: [
            {
                type: String,
                enum: Industries.industries
            }
        ],
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    themesOfInterest: {
        label: 'Themes of Interest',
        hint: 'Choose up to 3 themes that are the most interesting to you',
        hintMarkdown: false,
        fieldType: FieldTypes.THEMES,
        userProfileConfig: [
            {
                type: String,
                enum: Themes.themes
            }
        ],
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    numHackathons: {
        label: 'Number of hackathons attended',
        hint:
            "Not your first hackathon? Let us know! But don't worry if it is, we always accept also people who've never attended hackathons before.",
        hintMarkdown: false,
        fieldType: FieldTypes.NUM_HACKATHONS,
        userProfileConfig: {
            type: Number
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    education: {
        label: 'Education',
        hint:
            'Select your most recent education, or the one that you currently have in progress and your expected graduation year.',
        hintMarkdown: false,
        fieldType: FieldTypes.EDUCATION,
        userProfileConfig: {
            level: String,
            university: String,
            degree: String,
            graduationYear: Number
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    motivation: {
        label: 'Motivation',
        hint:
            'Why do you want to be accepted to this hackathon, and why should we choose you? **Please note that we regard a well-written letter of motivation very highly when reviewing applications.**',
        hintMarkdown: true,
        fieldType: FieldTypes.LONG_TEXT,
        schemaConfig: {
            defaultEnable: false,
            defaultRequired: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Motivation',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    portfolio: {
        label: 'Link to Portfolio',
        hint:
            "Have a portfolio website or some other place where we can see the cool things you've done in the past? Please provide a valid link beginning with https://, or http:// if you must",
        hintMarkdown: false,
        fieldType: FieldTypes.URL,
        userProfileConfig: {
            type: String,
            trim: true
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Link to Portfolio',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    github: {
        label: 'Link to Github',
        hint:
            "Do you have a public GitHub/GitLab/BitBucket/other profile you wouldn't mind us taking a look at when reviewing your application?",
        hintMarkdown: false,
        fieldType: FieldTypes.URL,
        userProfileConfig: {
            type: String,
            trim: true
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Link to GitHub',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    linkedin: {
        label: 'LinkedIn Profile',
        hint: 'Do you have a LinkedIn or similar online profile to showcase your professional experience?',
        hintMarkdown: false,
        fieldType: FieldTypes.URL,
        userProfileConfig: {
            type: String,
            trim: true
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'LinkedIn profile',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    countryOfTravel: {
        label: 'Country of Travel',
        hint:
            "Where would you be travelling to the event from? If you're travelling from far away, make sure you apply for a travel grant - we would love to cover a part of your travel costs.",
        hintMarkdown: false,
        fieldType: FieldTypes.COUNTRY,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Country of Travel',
                type: FilterTypes.STRING,
                valueType: FilterValues.COUNTRY
            }
        ]
    },
    cityOfTravel: {
        label: 'City of Travel',
        hint: 'Which city are you travelling from?',
        hintMarkdown: false,
        fieldType: FieldTypes.SHORT_TEXT,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'City of Travel',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    needsVisa: {
        label: 'Do you need a visa?',
        hint:
            'Do you need a visa to travel to the event? If you do, we will provide you with an invitation letter to make sure you get one. You can check e.g. [here](https://www.passportindex.org/comparebyPassport.php) if you need a visa to travel to the event.',
        hintMarkdown: true,
        fieldType: FieldTypes.BOOLEAN,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Link to Portfolio',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    },
    needsTravelGrant: {
        label: 'Do you want to apply for a travel grant?',
        hint:
            "We can't cover all of your travel costs, but we offer the following travel grants for people travelling to the event from farther away: \n\n" +
            '- Finland (outside Greater Helsinki Region): 20€ \n' +
            '- Baltics: 40€ \n' +
            '- Nordics & Russia: 60€ \n' +
            '- Rest of Europe: 80€ \n' +
            '- Outside of Europe: 150€',
        hintMarkdown: true,
        fieldType: FieldTypes.BOOLEAN,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Applied for travel grant',
                type: FilterTypes.BOOLEAN,
                valueType: FilterValues.BOOLEAN
            }
        ]
    },
    needsAccommodation: {
        label: 'Do you need free accommodation?',
        hint:
            'We can provide a warm space and a roof over your head during the event, where you will need your own sleeping bag and matress. Let us know if you need it, or if you will arrange your own accommodation during the event :)',
        hintMarkdown: false,
        fieldType: FieldTypes.BOOLEAN,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Needs accommodation',
                type: FilterTypes.BOOLEAN,
                valueType: FilterValues.BOOLEAN
            }
        ]
    },
    recruitmentOptions: {
        label: 'Job opportunities',
        hint: '',
        fieldType: FieldTypes.RECRUITMENT_OPTIONS,
        userProfileConfig: {
            status: {
                type: String,
                enum: Object.keys(Misc.recruitmentStatuses.items)
            },
            consent: {
                type: Boolean,
                default: false
            },
            relocation: {
                type: String,
                enum: Object.keys(Misc.relocationOptions.items)
            }
        },
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        }
    },
    teamOptions: {
        label: 'Applying as a team?',
        hint:
            '' +
            'If you want to apply as a team, we will review your team as a whole, \n' +
            "and accept all team members even if some of them wouldn't get accepted on their own.\n\n" +
            'Please note: \n' +
            '- If you choose to apply as a team, **we will NOT review your application** before you have configured your team on the Event Dashboard after submitting your registration \n' +
            '- All team members will have to fill the application form individually, after which you can add the people to your team \n\n' +
            'If you do apply as a team, you can also choose to apply individually in the case that your team is not accepted. \n',
        hintMarkdown: true,
        fieldType: FieldTypes.TEAM_OPTIONS,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: 'applyAsTeam',
                label: 'Team > Applied as team',
                type: FilterTypes.BOOLEAN,
                valueType: FilterValues.BOOLEAN
            },
            {
                path: 'applyAlone',
                label: 'Team > Applied also alone',
                type: FilterTypes.BOOLEAN,
                valueType: FilterValues.BOOLEAN
            }
        ]
    },
    secretCode: {
        label: 'Secret code',
        hint:
            "If you've received a secret code for this event, enter it here. Note: this is not the same as your team code, which you will be able to enter after completing your registration.",
        hintMarkdown: false,
        fieldType: FieldTypes.SHORT_TEXT,
        schemaConfig: {
            defaultEnable: false,
            defaultRequire: false,
            editable: true
        },
        filters: [
            {
                path: '',
                label: 'Secret Code',
                type: FilterTypes.STRING,
                valueType: FilterValues.STRING
            }
        ]
    }
};

const Fields = {
    firstName: {
        ...FieldProps.firstName,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.firstName || idToken.given_name || '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(100)
                .label(FieldProps.firstName.label);

            return required ? base.required() : base;
        }
    },
    lastName: {
        ...FieldProps.lastName,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.lastName || idToken.family_name || '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(200)
                .label(FieldProps.lastName.label);
            return required ? base.required() : base;
        }
    },
    email: {
        ...FieldProps.email,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.email || idToken.email || '',
        validationSchema: required => {
            const base = yup
                .string()
                .email()
                .label(FieldProps.email.label);
            return required ? base.required() : base;
        }
    },
    phoneNumber: {
        ...FieldProps.phoneNumber,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.phoneNumber || undefined,
        validationSchema: required => {
            const country_code = yup
                .string()
                .oneOf(Countries.asArrayOfPhoneCodes)
                .label('Country code');
            const number = yup
                .string()
                .matches(/^[0-9]{7,14}$/)
                .label('Phone number');
            const shape = required
                ? {
                      country_code: country_code.required(),
                      number: number.required()
                  }
                : {
                      country_code,
                      number
                  };

            return yup.object(shape).label(FieldProps.phoneNumber.label);
        }
    },
    dateOfBirth: {
        ...FieldProps.dateOfBirth,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.dateOfBirth || undefined,
        validationSchema: required => {
            const base = yup
                .date()
                .min(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 120))
                .max(new Date(Date.now() - 1000 * 60 * 60 * 24 * 364 * 16))
                .label(FieldProps.dateOfBirth.label);

            return required ? base.required() : base;
        }
    },
    gender: {
        ...FieldProps.gender,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.gender || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .oneOf(Genders)
                .label(FieldProps.gender.label);
            return required ? base.required() : base;
        }
    },
    nationality: {
        ...FieldProps.nationality,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.nationality || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .oneOf(Countries.asArrayOfNationalities)
                .label(FieldProps.nationality.label);

            return required ? base.required() : base;
        }
    },
    spokenLanguages: {
        ...FieldProps.spokenLanguages,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.spokenLanguages || [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(yup.string().oneOf(Languages.asArrayOfNames))
                .ensure()
                .label(FieldProps.spokenLanguages.label);

            return required ? base.required() : base;
        }
    },
    countryOfResidence: {
        ...FieldProps.countryOfResidence,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.countryOfResidence || idToken.country || '',
        validationSchema: required => {
            const base = yup
                .string()
                .oneOf(Countries.asArrayOfName)
                .label(FieldProps.countryOfResidence.label);

            return required ? base.required() : base;
        }
    },
    cityOfResidence: {
        ...FieldProps.cityOfResidence,
        category: Categories.basicDetails,
        default: (userProfile, idToken) => userProfile.cityOfResidence || idToken.city || '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(100)
                .label(FieldProps.cityOfResidence.label);
            return required ? base.required() : base;
        }
    },
    tShirtSize: {
        ...FieldProps.tShirtSize,
        category: Categories.basicDetails,
        default: userProfile => userProfile.tShirtSize || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .oneOf(Misc.tShirtSizes)
                .label(FieldProps.tShirtSize.label);

            return required ? base.required() : base;
        }
    },
    dietaryRestrictions: {
        ...FieldProps.dietaryRestrictions,
        category: Categories.basicDetails,
        default: () => [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(yup.string().oneOf(Misc.dietaryRestrictions))
                .ensure()
                .label(FieldProps.dietaryRestrictions.label);

            return required ? base.required() : base;
        }
    },
    headline: {
        ...FieldProps.headline,
        category: Categories.skillsAndInterests,
        default: () => '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(100)
                .label(FieldProps.headline.label);
            return required ? base.required() : base;
        }
    },
    biography: {
        ...FieldProps.biography,
        category: Categories.skillsAndInterests,
        default: () => '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(1000)
                .label(FieldProps.biography.label);

            return required ? base.required() : base;
        }
    },
    roles: {
        ...FieldProps.roles,
        category: Categories.skillsAndInterests,
        default: () => [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(
                    yup.object().shape({
                        role: yup
                            .string()
                            .oneOf(Roles.items)
                            .required()
                            .label('Role'),
                        years: yup
                            .number()
                            .min(1)
                            .max(5)
                            .required()
                            .label('Years of experience')
                    })
                )
                .ensure()
                .max(5)
                .label(FieldProps.roles.label);

            return required ? base.required() : base;
        }
    },
    skills: {
        ...FieldProps.skills,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => userProfile.skills || [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(
                    yup.object().shape({
                        skill: yup
                            .string()
                            .oneOf(Skills.items)
                            .required()
                            .label('Skill'),
                        level: yup
                            .number()
                            .min(1)
                            .max(5)
                            .required()
                            .label('Experience level')
                    })
                )
                .max(10)
                .ensure()
                .label(FieldProps.skills.label);

            return required ? base.required() : base;
        }
    },
    motivation: {
        ...FieldProps.motivation,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => '',
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(2000)
                .label(FieldProps.motivation.label);

            return required ? base.required() : base;
        }
    },
    industriesOfInterest: {
        ...FieldProps.industriesOfInterest,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => userProfile.industriesOfInterest || [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(yup.string().oneOf(Industries.industries))
                .max(3)
                .ensure()
                .label(FieldProps.industriesOfInterest.label);
            return required ? base.required() : base;
        }
    },
    themesOfInterest: {
        ...FieldProps.themesOfInterest,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => userProfile.themesOfInterest || [],
        validationSchema: required => {
            const base = yup
                .array()
                .of(yup.string().oneOf(Themes.themes))
                .max(3)
                .ensure()
                .label(FieldProps.themesOfInterest.label);

            return required ? base.required() : base;
        }
    },
    numHackathons: {
        ...FieldProps.numHackathons,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => userProfile.numHackathons || undefined,
        validationSchema: required => {
            const base = yup
                .number()
                .min(0)
                .max(5)
                .label(FieldProps.numHackathons.label);

            return required ? base.required() : base;
        }
    },
    education: {
        ...FieldProps.education,
        category: Categories.skillsAndInterests,
        default: (userProfile, idToken) => userProfile.education || undefined,
        validationSchema: required => {
            const base = yup
                .object()
                .shape({
                    level: yup
                        .string()
                        .label('Level of Education')
                        .required(),
                    university: yup.string().label('University'),
                    degree: yup.string().label('Degree'),
                    graduationYear: yup
                        .number()
                        .min(1900)
                        .max(2100)
                        .label('Graduation year')
                })
                .noUnknown()
                .label(FieldProps.education.label);

            return required ? base.required() : base;
        }
    },
    portfolio: {
        ...FieldProps.portfolio,
        category: Categories.links,
        default: (userProfile, idToken) => userProfile.portfolio || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .url()
                .label(FieldProps.portfolio.label);

            return required ? base.required() : base;
        }
    },
    github: {
        ...FieldProps.github,
        category: Categories.links,
        default: (userProfile, idToken) => userProfile.github || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .url()
                .label(FieldProps.github.label);

            return required ? base.required() : base;
        }
    },
    linkedin: {
        ...FieldProps.linkedin,
        category: Categories.links,
        default: (userProfile, idToken) => userProfile.linkedin || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .url()
                .label(FieldProps.linkedin.label);

            return required ? base.required() : base;
        }
    },
    countryOfTravel: {
        ...FieldProps.countryOfTravel,
        category: Categories.travelAndAccommodation,
        default: userProfile => userProfile.countryOfResidence || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .oneOf(Countries.asArrayOfName)
                .label(FieldProps.countryOfTravel.label);

            return required ? base.required() : base;
        }
    },
    cityOfTravel: {
        ...FieldProps.cityOfTravel,
        category: Categories.travelAndAccommodation,
        default: userProfile => userProfile.cityOfResidence || undefined,
        validationSchema: required => {
            const base = yup
                .string()
                .min(required ? 1 : 0)
                .max(200)
                .label(FieldProps.cityOfTravel.label);

            return required ? base.required() : base;
        }
    },
    needsVisa: {
        ...FieldProps.needsVisa,
        category: Categories.travelAndAccommodation,
        default: () => false,
        validationSchema: required => {
            const base = yup
                .boolean()
                .transform(value => {
                    if (!value) return false;
                    return true;
                })
                .label(FieldProps.needsVisa.label);

            return required ? base.required() : base;
        }
    },
    needsTravelGrant: {
        ...FieldProps.needsTravelGrant,
        category: Categories.travelAndAccommodation,
        default: () => false,
        validationSchema: required => {
            const base = yup
                .boolean()
                .transform(value => {
                    if (!value) return false;
                    return true;
                })
                .label(FieldProps.needsTravelGrant.label);

            return required ? base.required() : base;
        }
    },
    needsAccommodation: {
        ...FieldProps.needsAccommodation,
        category: Categories.travelAndAccommodation,
        default: () => false,
        validationSchema: required => {
            const base = yup
                .boolean()
                .transform(value => {
                    if (!value) return false;
                    return true;
                })
                .label(FieldProps.needsAccommodation.label);

            return required ? base.required() : base;
        }
    },
    teamOptions: {
        ...FieldProps.teamOptions,
        category: Categories.other,
        default: () => ({
            applyAsTeam: false,
            applyAlone: false
        }),
        validationSchema: required => {
            const base = yup
                .object()
                .shape({
                    applyAsTeam: yup
                        .boolean()
                        .transform(value => {
                            if (!value) return false;
                            return true;
                        })
                        .label('Applying as a team?'),
                    applyAlone: yup
                        .boolean()
                        .transform(value => {
                            if (!value) return false;
                            return true;
                        })
                        .label('Applying also alone?')
                })
                .noUnknown()
                .label(FieldProps.teamOptions.label);

            return required ? base.required() : base;
        }
    },
    secretCode: {
        ...FieldProps.secretCode,
        category: Categories.other,
        default: () => '',
        validationSchema: required => {
            const base = yup
                .string()
                .max(100)
                .label(FieldProps.secretCode.label);

            return required ? base.required() : base;
        }
    },
    recruitmentOptions: {
        ...FieldProps.recruitmentOptions,
        category: Categories.recruitment,
        default: () => ({
            consent: false
        }),
        validationSchema: required => {
            const base = yup
                .object()
                .shape({
                    status: yup.string(),
                    consent: yup.boolean().transform(value => {
                        if (!value) return false;
                        return true;
                    }),
                    relocation: yup.string()
                })
                .noUnknown()
                .label(FieldProps.recruitmentOptions.label);

            return required ? base.required() : base;
        }
    }
};

function buildFieldToLabelMap() {
    const result = {};

    Object.keys(Fields).forEach(fieldName => {
        result[fieldName] = Fields[fieldName].label;
    });

    return result;
}

function buildFiltersArray() {
    const fields = Object.keys(Fields);
    const baseFilters = [
        {
            path: 'rating',
            label: 'Rating',
            type: FilterTypes.NUMBER,
            valueType: FilterValues.NUMBER
        },
        {
            path: 'status',
            label: 'Status',
            type: FilterTypes.STRING,
            valueType: FilterValues.STATUS
        },
        {
            path: 'tags',
            label: 'Tags',
            type: FilterTypes.ARRAY,
            valueType: FilterValues.TAG
        },
        {
            path: 'travelGrant',
            label: 'Travel Grant',
            type: FilterTypes.NUMBER,
            valueType: FilterValues.NUMBER
        }
    ];
    const answerFilters = fields.reduce((res, fieldKey) => {
        const field = Fields[fieldKey];
        if (!Array.isArray(field.filters) || !field.filters.length) return res;
        const filters = field.filters.map(filter => {
            if (filter.path.length) {
                filter.path = `answers.${fieldKey}.${filter.path}`;
            } else {
                filter.path = `answers.${fieldKey}`;
            }
            return filter;
        });
        return res.concat(filters);
    }, []);

    const extraFilters = [
        {
            label: 'Terminal',
            path: 'answers.terminal',
            type: FilterTypes.OBJECT,
            valueType: FilterValues.BOOLEAN
        },
        {
            label: 'Terminal > Motivation',
            path: 'answers.terminal.motivation',
            type: FilterTypes.STRING,
            valueType: FilterValues.STRING
        },
        {
            label: 'Terminal > Most fascinating project',
            path: 'answers.terminal.mostFascinatingProject',
            type: FilterTypes.STRING,
            valueType: FilterValues.STRING
        },
        {
            label: 'Terminal > Ideal work environment',
            path: 'answers.terminal.idealWorkEnvironment',
            type: FilterTypes.STRING,
            valueType: FilterValues.STRING
        },
        {
            label: 'Terminal > What makes you awesome',
            path: 'answers.terminal.whatMakesYouAwesome',
            type: FilterTypes.STRING,
            valueType: FilterValues.STRING
        },
        {
            label: 'Terminal > Accomodation',
            path: 'answers.terminal.accomodation',
            type: FilterTypes.STRING,
            valueType: FilterValues.STRING
        }
    ];

    return baseFilters.concat(answerFilters).concat(extraFilters);
}

const Helpers = {
    getLabel: field => {
        if (Fields.hasOwnProperty(field)) {
            return Fields[field].label || field;
        }
        return field;
    },
    getFields: () => Fields,
    getField: field => Fields[field],
    getFieldType: field => (Fields[field] ? Fields[field].fieldType.id : null),
    filters: buildFiltersArray(),
    fieldToLabelMap: buildFieldToLabelMap(),
    fieldTypes: FieldTypes,
    getCategory: field => {
        if (Fields.hasOwnProperty(field)) {
            return Fields[field].category.label;
        }
        return '';
    },
    getDefaultValue: (field, userProfile, idToken) => {
        if (Fields.hasOwnProperty(field)) {
            return Fields[field].default(userProfile, idToken);
        }
        return null;
    },
    getDefaultValueCustom: question => {
        if (['boolean', 'checkbox'].indexOf(question.fieldType) !== -1) {
            return question.settings.default || false;
        }
    },
    getDefaultValuesFromConfig: (config, customQuestions, userProfile, idToken) => {
        const result = {};

        Object.keys(config).forEach(field => {
            if (config[field].enable) {
                result[field] = Helpers.getDefaultValue(field, userProfile, idToken);
            }
        });

        customQuestions.forEach(customSection => {
            customSection.questions.forEach(question => {
                result[question.name] = Helpers.getDefaultValueCustom(question);
            });
        });

        return result;
    },
    getDefaultValuesForFields: (fields, userProfile, idToken) => {
        const result = {};

        fields.forEach(field => {
            result[field] = Helpers.getDefaultValue(field, userProfile, idToken);
        });

        return result;
    },
    getCategoryOrderByLabel: categoryLabel => {
        for (let categoryId of Object.keys(Categories)) {
            const category = Categories[categoryId];
            if (category.label === categoryLabel) {
                return category.order;
            }
        }
        return 1000;
    }
};

module.exports = Helpers;

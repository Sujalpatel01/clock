document.addEventListener('DOMContentLoaded', () => {
    const jyotirlingaData = {
        somnath: {
            en: {
                name: "Somnath",
                location: "Prabhas Patan, Gujarat",
                shlokaMantra: "सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम् ।",
            },
            gu: {
                name: "સોમનાથ",
                location: "પ્રભાસ પાટણ, ગુજરાત",
                shlokaMantra: "સૌરાષ્ટ્રે સોમનાથં ચ શ્રીશૈલે મલ્લિકાર્જુનમ્ ।",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://wallpaperaccess.com/full/5327764.jpg&f=1&nofb=1&ipt=c5da66f36073a1040d7bffd5da4d08224067dbe1a6c4841308e6dd61800530cc",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder: Replace with actual Somnath Shloka audio
            videoEmbed: ""
        },
        mallikarjuna: {
            en: {
                name: "Mallikarjuna",
                location: "Srisailam, Andhra Pradesh",
                shlokaMantra: "उज्जयिन्यां महाकालमोङ्कारममलेश्वरम् ॥",
            },
            gu: {
                name: "મલ્લિકાર્જુન",
                location: "શ્રીશૈલમ, આંધ્ર પ્રદેશ",
                shlokaMantra: "ઉજ્જયિન્યાં મહાકાલમોઙ્કારમમલેશ્વરમ્ ॥",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=http://blessingsonthenet.com/img/uploads/aim_bn_1459406572.jpg&f=1&nofb=1&ipt=8a289fbe52a8270c36834f984efe6382b09cb7d0d23b70a70052d178084c45",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        mahakaleshwar: {
            en: {
                name: "Mahakaleshwar",
                location: "Ujjain, Madhya Pradesh",
                shlokaMantra: "परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् ।",
            },
            gu: {
                name: "મહાકાલેશ્વર",
                location: "ઉજ્જૈન, મધ્ય પ્રદેશ",
                shlokaMantra: "પરલ્યાં વૈદ્યનાથં ચ ડાકિન્યાં ભીમશઙ્કરમ્ ।",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://wallpaperaccess.com/full/7173381.jpg&f=1&nofb=1&ipt=a5e9b0d3593379dedf5608fe9d919f2dccc34d67656610203049fd578a177aea",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: "https://www.youtube.com/embed/Y-yW_7qN-R4?si=d2m5X-M-mQ65NnS0"
        },
        omkareshwar: {
            en: {
                name: "Omkareshwar",
                location: "Khandwa, Madhya Pradesh",
                shlokaMantra: "सेतुबन्धे च रामेशं नागेशं दारुकावने ॥",
            },
            gu: {
                name: "ઓમકારેશ્વર",
                location: "ખંડવા, મધ્ય પ્રદેશ",
                shlokaMantra: "સેતુબન્ધે ચ રામેશં નાગેશં દારુકાવને ॥",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://blessingsonthenet.com/img/slideshow/aim_bn_1459406551.jpg&f=1&nofb=1&ipt=4d3dc11703fe6184e918986c8a3b792e0812f4fdae842121bad4d4e76ff4eec3",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        kedarnath: {
            en: {
                name: "Kedarnath",
                location: "Kedarnath, Uttarakhand",
                shlokaMantra: "वाराणस्यां तु विश्वेशं त्र्यम्बकं गौतमी तटे ।",
            },
            gu: {
                name: "કેદારનાથ",
                location: "કેદારનાથ, ઉત્તરાખંડ",
                shlokaMantra: "વારાણસ્યાં તુ વિશ્વેશં ત્ર્યમ્બકં ગૌતમી તટે ।",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://kedarnathtemple.com/wp-content/uploads/2020/01/kedarnath-shivlingam-e1672499046343.jpg&f=1&nofb=1&ipt=1a0591477ec82b59bd639f7b441674832848a2d41a51a65065ebb0181cc104cc",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        bhimashankar: {
            en: {
                name: "Bhimashankar",
                location: "Pune, Maharashtra",
                shlokaMantra: "हिमालये तु केदारं घुश्मेशं च शिवालये ॥",
            },
            gu: {
                name: "ભીમાશંકર",
                location: "પુણે, મહારાષ્ટ્ર",
                shlokaMantra: "હિમાલયે તુ કેદારં ઘુશ્મેશં ચ શિવાલયે ॥",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://www.templeduniya.com/wp-content/uploads/2022/06/Project-51-7-min.jpg&f=1&nofb=1&ipt=7569cfa399a404243412e1a980bb9391169253bd06486681653a1a3449bd09cb",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        kashivishwanath: {
            en: {
                name: "Kashi Vishwanath",
                location: "Varanasi, Uttar Pradesh",
                shlokaMantra: "एतानि ज्योतिर्लिङ्गानि सायं प्रातः पठेन्नरः ।",
            },
            gu: {
                name: "કાશી વિશ્વનાથ",
                location: "વારાણસી, ઉત્તર પ્રદેશ",
                shlokaMantra: "એતાનિ જ્યોતિર્લિઙ્ગાનિ સાયં પ્રાતઃ પઠેન્નરઃ ।",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://blog.yatradham.org/wp-content/uploads/2020/07/Kashi-Vishwanath.jpg&f=1&nofb=1&ipt=26b44a88ff87e5731e5901d16b5ad58e7091f019e8d21f9cbd2113db1de2db2c",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: "https://www.youtube.com/embed/oQ-j-qDqfQo?si=D1oGfB1rT15N50_d"
        },
        trimbakeshwar: {
            en: {
                name: "Trimbakeshwar",
                location: "Nashik, Maharashtra",
                shlokaMantra: "स्मृत्वा जनमकृतं पापं स्मरणेन विनश्यति ॥",
            },
            gu: {
                name: "ત્ર્યંબકેશ્વર",
                location: "નાસિક, મહારાષ્ટ્ર",
                shlokaMantra: "સ્મૃત્વા જનમકૃતં પાપં સ્મરણેન વિનશ્યતિ ॥",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://i.pinimg.com/originals/83/3a/8e/833a8e1fdcb4c8f17e81af63b045269b.jpg&f=1&nofb=1&ipt=902ac7e0eac99d56ededad99e98b5c35f05a89dea0baab7ee9306851cb280f23",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        vaidyanath: {
            en: {
                name: "Vaidyanath",
                location: "Deoghar, Jharkhand",
                shlokaMantra: "Meaning: One who recites these 12 Jyotirlingas morning and evening...",
            },
            gu: {
                name: "વૈદ્યનાથ",
                location: "દેવઘર, ઝારખંડ",
                shlokaMantra: "અર્થ: જે વ્યક્તિ સવારે અને સાંજે આ ૧૨ જ્યોતિર્લિંગોનું સ્મરણ કરે છે...",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://www.alightindia.com/cdn/uploads/postimages/MEDIUM/shivlinga%2520baidyanath%2520sharechat--87c4f4.jpeg&f=1&nofb=1&ipt=40b210c3bbef2131b423548cf10df3e55f5ccdbf3c30fef737626c04369ae81",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        nageshwar: {
            en: {
                name: "Nageshwar",
                location: "Dwarka, Gujarat",
                shlokaMantra: "...all the sins committed in previous births are destroyed by merely remembering them.",
            },
            gu: {
                name: "નાગેશ્વર",
                location: "દ્વારકા, ગુજરાત",
                shlokaMantra: "...તેના પૂર્વ જન્મના બધા પાપો માત્ર સ્મરણ કરવાથી નાશ પામે છે.",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://i.pinimg.com/736x/66/d6/23/66d623443bfc18d024d35bb043099c9e.jpg&f=1&nofb=1&ipt=767ee0a83c54336b916306eee585fcb5004167f59784c35c81a2183b4b8ae84a",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        rameswaram: {
            en: {
                name: "Rameswaram",
                location: "Rameswaram Island, Tamil Nadu",
                shlokaMantra: "द्व्युग्मं श्रीभीमशङ्करं, त्र्यम्बकं घृष्णेश्वरम् ।",
            },
            gu: {
                name: "રામેશ્વરમ",
                location: "રામેશ્વરમ ટાપુ, તમિલનાડુ",
                shlokaMantra: "દ્વાદશૈતાનિ નામાનિ, પ્રાતઃકાલે પઠેત્સદા ।",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://apnayatra.com/wp-content/uploads/2022/05/Mahakal-Temple-Ujjain.jpg&f=1&nofb=1&ipt=de040dafa5147eb7e15138de2545c7fd42da0a67440906aa1e27bfa5d6462946",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        },
        grishneshwar: {
            en: {
                name: "Grishneshwar",
                location: "Ellora, Maharashtra",
                shlokaMantra: "સર્વપાપવિનિર્મુક્તઃ શિવલોકે મહિષ્યતિ ॥",
            },
            gu: {
                name: "ઘૃષ્ણેશ્વર",
                location: "ઇલોરા, મહારાષ્ટ્ર",
                shlokaMantra: "સર્વપાપવિનિર્મુક્તઃ શિવલોકે મહિષ્યતિ ॥",
            },
            image: "https://external-content.duckduckgo.com/iu/?u=https://templeconnect.com/wp-content/uploads/2022/02/Grishneshwar-Jyotirlinga-Maharashtra.jpg&f=1&nofb=1&ipt=9eda9b3b25e0f387c5f7106db4768a652e3117e4f803df79b1644baee601012a",
            audio: "https://www.bhaktibharat.com/assets/images/audio/jay-shiv-omkara-aarti-12154.mp3", // Placeholder
            videoEmbed: ""
        }
    };

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const monthDisplay = document.querySelector('.month-display');
    const digitalTimeDisplay = document.querySelector('.digital-time-display');
    const digitalDateDisplay = document.querySelector('.digital-date-display');
    const clockFace = document.querySelector('.clock-face-elements');
    const clockContainer = document.querySelector('.clock-container');
    const languageToggle = document.getElementById('languageToggle');
    const themeSwitcher = document.getElementById('theme-switcher');

    const modal = document.getElementById('jyotirlingaInfoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalLocation = document.getElementById('modalLocation');
    const audioPlayer = document.getElementById('audioPlayer');
    const videoPlayer = document.getElementById('videoPlayer');
    const shlokaText = document.getElementById('shlokaText'); // New element for shloka
    const closeModalButton = document.querySelector('.close-modal');
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.muted = false;

    let hasInteracted = false;

    const playBackgroundMusic = () => {
        if (!hasInteracted) {
            backgroundMusic.volume = 0.5;
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Background music started playing.');

                }).catch(error => {
                    console.warn('Autoplay prevented. User interaction required to play music.', error);

                });
            }
            hasInteracted = true;
        }
    };


    document.body.addEventListener('click', playBackgroundMusic, { once: true });
    document.body.addEventListener('keypress', playBackgroundMusic, { once: true });

    let currentHourButton = null;
    let currentLanguage = 'en';

    const setClock = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now;
        const secondsRatio = seconds / 60;
        const minutesRatio = (secondsRatio + minutes) / 60;
        const hoursRatio = (minutesRatio + hours.getHours()) / 12;

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);

        const langOptionsDate = currentLanguage === 'gu' ? 'gu-IN' : 'en-US';
        const langOptionsMonth = currentLanguage === 'gu' ? 'gu-IN' : 'en-US';

        monthDisplay.textContent = now.toLocaleDateString(langOptionsMonth, { month: 'long' });
        digitalTimeDisplay.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        digitalDateDisplay.textContent = `${now.toLocaleDateString(langOptionsDate, { weekday: 'long' })}, ${now.toLocaleDateString(langOptionsDate, { day: 'numeric', month: 'long', year: 'numeric' })}`;

        const currentHour12 = hours.getHours() % 12 || 12;
        const newHourButton = document.querySelector(`.clock-buttons button[data-hour='${currentHour12}']`);

        if (newHourButton && newHourButton !== currentHourButton) {
            currentHourButton?.classList.remove('current-hour');
            newHourButton.classList.add('current-hour');
            currentHourButton = newHourButton;
        }
    };

    const setRotation = (element, rotationRatio) => {
        element.style.setProperty('--rotation', rotationRatio * 360);
        element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`;
    };

    const createClockFace = () => {
        clockFace.innerHTML = ''; // Clear existing elements

        const clockButtonsContainer = document.createElement('div');
        clockButtonsContainer.className = 'clock-buttons';
        const jyotirlingaIds = Object.keys(jyotirlingaData);

        for (let i = 0; i < 12; i++) {
            const hourNumber = (i + 1);
            const jyotirlingaIndex = i;
            const jyotirlingaId = jyotirlingaIds[jyotirlingaIndex];
            const jyotirlingaName = jyotirlingaData?.[jyotirlingaId]?.[currentLanguage]?.name || `Hour ${hourNumber}`;

            // Create Jyotirlinga hour button (outer ring)
            const button = document.createElement('button');
            button.dataset.hour = hourNumber;
            button.dataset.jyotirlingaId = jyotirlingaId;
            button.textContent = hourNumber;
            button.title = `${jyotirlingaName}`; // Tooltip text
            clockButtonsContainer.appendChild(button);

            // Create Rudraksha image container (inner ring)
            const rudrakshaContainer = document.createElement('div');
            rudrakshaContainer.className = 'rudraksha-container';
            rudrakshaContainer.dataset.hour = hourNumber;
            rudrakshaContainer.title = 'Rudraksha';

            const rudrakshaImage = document.createElement('img');
            rudrakshaImage.src = 'https://external-content.duckduckgo.com/iu/?u=https://cdn2.shopify.com/s/files/1/1095/1462/products/single-rudraksha-08_2048x@2x.jpg?v%3D1492401012&f=1&nofb=1&ipt=54037c0c5fbb5556eeb9d1b261de6deaa946f5a9c9cb585817bfba1d94f1e52b';
            rudrakshaImage.alt = 'Rudraksha';
            rudrakshaImage.className = 'rudraksha-image';

            rudrakshaContainer.appendChild(rudrakshaImage);
            clockFace.appendChild(rudrakshaContainer);
        }
        clockFace.appendChild(clockButtonsContainer);
        positionFaceElements();
        setupEventListeners();
    };

    const positionFaceElements = () => {
        const radius = clockContainer.offsetWidth / 2;
        const buttons = document.querySelectorAll('.clock-buttons button');
        const rudrakshaContainers = document.querySelectorAll('.rudraksha-container');

        const buttonRadius = radius * 0.85;
        buttons.forEach((el, i) => {
            const hourNumber = i + 1;
            const angleRad = (hourNumber * 30 - 90) * (Math.PI / 180);
            const x = buttonRadius * Math.cos(angleRad);
            const y = buttonRadius * Math.sin(angleRad);
            el.style.top = `calc(50% + ${y}px)`;
            el.style.left = `calc(50% + ${x}px)`;
        });

        const rudrakshaRadius = radius * 0.59;
        rudrakshaContainers.forEach((el, i) => {
            const hourNumber = i + 1;
            const angleRad = (hourNumber * 30 - 90) * (Math.PI / 180);
            const x = rudrakshaRadius * Math.cos(angleRad);
            const y = rudrakshaRadius * Math.sin(angleRad);
            el.style.top = `calc(50% + ${y}px)`;
            el.style.left = `calc(50% + ${x}px)`;
        });
    };

    const updateModalContent = (jyotirlingaId) => {
        const data = jyotirlingaData[jyotirlingaId];
        if (data) {
            const translation = data[currentLanguage];
            modalImage.src = data.image;
            modalImage.alt = translation.name;
            modalTitle.textContent = translation.name;
            modalLocation.textContent = translation.location;
            shlokaText.textContent = translation.shlokaMantra; // Set the shloka text
            modalImage.style.display = 'block';

            // Handle Audio Player for Shloka Mantra
            if (data.audio) {
                audioPlayer.src = data.audio;
                audioPlayer.style.display = 'block';
            } else {
                audioPlayer.src = '';
                audioPlayer.style.display = 'none';
            }

            // Handle Video Player
            if (data.videoEmbed) {
                videoPlayer.innerHTML = `<iframe src="${data.videoEmbed}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                videoPlayer.style.display = 'block';
            } else {
                videoPlayer.innerHTML = '';
                videoPlayer.style.display = 'none';
            }

        } else {
            modalImage.style.display = 'none';
            modalTitle.textContent = currentLanguage === 'gu' ? 'માહિતી નથી' : 'No Info Available';
            modalLocation.textContent = '';
            audioPlayer.src = '';
            audioPlayer.style.display = 'none';
            videoPlayer.innerHTML = '';
            videoPlayer.style.display = 'none';
            shlokaText.textContent = currentLanguage === 'gu' ? 'આ જ્યોતિર્લિંગ માટે કોઈ શ્લોક મંત્ર ઉપલબ્ધ નથી.' : 'No Shloka Mantra available for this Jyotirlinga.';
        }
        closeModalButton.textContent = currentLanguage === 'gu' ? 'બંધ કરો' : 'Close';
    };

    const setupEventListeners = () => {
        const buttons = document.querySelectorAll('.clock-buttons button');
        buttons.forEach(button => {
            button.removeEventListener('click', handleJyotirlingaButtonClick);
            button.addEventListener('click', handleJyotirlingaButtonClick);
        });

        closeModalButton.removeEventListener('click', handleCloseModalClick);
        closeModalButton.addEventListener('click', handleCloseModalClick);

        modal.removeEventListener('click', handleModalOverlayClick);
        modal.addEventListener('click', handleModalOverlayClick);

        languageToggle.removeEventListener('click', handleLanguageToggleClick);
        languageToggle.addEventListener('click', handleLanguageToggleClick);

        themeSwitcher.querySelectorAll('button').forEach(btn => {
            btn.removeEventListener('click', handleThemeChange);
            btn.addEventListener('click', handleThemeChange);
        });
    };

    const handleJyotirlingaButtonClick = (event) => {
        const jyotirlingaId = event.currentTarget.dataset.jyotirlingaId;
        updateModalContent(jyotirlingaId);
        modal.classList.add('active');
    };

    const handleCloseModalClick = () => {
        modal.classList.remove('active');
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        videoPlayer.innerHTML = '';
    };

    const handleModalOverlayClick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            videoPlayer.innerHTML = '';
        }
    };

    const handleLanguageToggleClick = () => {
        currentLanguage = currentLanguage === 'en' ? 'gu' : 'en';
        languageToggle.textContent = currentLanguage === 'gu' ? 'English Mode' : 'ગુજરાતી મોડ';

        createClockFace();
        setClock();

        if (modal.classList.contains('active')) {
            const activeJyotirlingaBtn = document.querySelector('.clock-buttons button.current-hour');
            const currentJyotirlingaId = activeJyotirlingaBtn ? activeJyotirlingaBtn.dataset.jyotirlingaId : Object.keys(jyotirlingaData)[0];
            updateModalContent(currentJyotirlingaId);
        }
    };

    const handleThemeChange = (event) => {
        const selectedTheme = event.currentTarget.dataset.theme;
        document.body.className = '';
        if (selectedTheme !== 'default') {
            document.body.classList.add(`${selectedTheme}-theme`);
        }

        themeSwitcher.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');

        // Restart clock animation for smooth transition effect
        clockContainer.style.animation = 'none';
        void clockContainer.offsetWidth; // Trigger reflow
        clockContainer.style.animation = 'fadeInUp 1s ease-out 0.4s both, clockGlow 5s ease-in-out infinite alternate';

        // Re-apply rotation animation to the pseudo-element as well
        // This is a common trick to restart CSS animations
        const beforeElement = document.createElement('style');
        beforeElement.innerHTML = `.clock-container::before { animation: none; }`;
        document.head.appendChild(beforeElement);
        // Trigger reflow for the pseudo-element
        void clockContainer.offsetWidth;
        beforeElement.innerHTML = `.clock-container::before { animation: rotate 8s linear infinite; }`;
        // Remove the temporary style element after reflow
        setTimeout(() => document.head.removeChild(beforeElement), 10);
    };

    createClockFace();
    setClock();
    setInterval(setClock, 1000);
    window.addEventListener('resize', positionFaceElements);
});

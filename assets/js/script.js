// Devotional Website JavaScript
class DevotionalApp {
  constructor() {
    this.currentWeek = null;
    this.currentDay = null;
    this.weeks = [];
    this.isShowingHome = true;
    this.init();
  }

  init() {
    console.log('Initializing DevotionalApp...');
    this.loadWeeksData();
    console.log('Weeks data loaded');
    this.setupEventListeners();
    console.log('Event listeners setup');
    this.renderSidebarNav();
    console.log('Sidebar navigation rendered');
    this.showHome();
    console.log('Home page shown');
  }

  // Load weeks data based on the quarterly plan structure
  loadWeeksData() {
    this.weeks = [
      {
        number: 1,
        title: "The Creator God",
        memoryVerse: "In the beginning, God created the heavens and the earth. (Genesis 1:1)",
        days: [
          { number: 1, title: "Who Made You?", type: "Catechism", hymn: "All Things Bright and Beautiful" },
          { number: 2, title: "Wisdom", type: "Wisdom", hymn: "Joyful, Joyful, We Adore Thee" },
          { number: 3, title: "What Else Did God Make?", type: "Catechism", hymn: "This Is My Father's World" },
          { number: 4, title: "Creative", type: "Attribute", hymn: "All Creatures of Our God and King" },
          { number: 5, title: "Michael Faraday", type: "Biography", hymn: "For the Beauty of the Earth" }
        ]
      },
      {
        number: 2,
        title: "God's Word",
        memoryVerse: "Your word is a lamp to my feet and a light to my path. (Psalm 119:105)",
        days: [
          { number: 1, title: "How Can You Glorify God?", type: "Catechism", hymn: "To God Be the Glory" },
          { number: 2, title: "Knowledge", type: "Wisdom", hymn: "Open My Eyes, That I May See" },
          { number: 3, title: "Why Did God Make You and All Things?", type: "Catechism", hymn: "Doxology" },
          { number: 4, title: "True", type: "Attribute", hymn: "O Word of God Incarnate" },
          { number: 5, title: "William Tyndale", type: "Biography", hymn: "Thy Word Is a Lamp" }
        ]
      },
      {
        number: 3,
        title: "Trusting God",
        memoryVerse: "Trust in the LORD with all your heart, and do not lean on your own understanding. (Proverbs 3:5)",
        days: [
          { number: 1, title: "Are There More Gods Than One?", type: "Catechism", hymn: "Our God, Our Help in Ages Past" },
          { number: 2, title: "Faith", type: "Wisdom", hymn: "'Tis So Sweet to Trust in Jesus" },
          { number: 3, title: "How Many Persons Are There in God?", type: "Catechism", hymn: "Come, Thou Almighty King" },
          { number: 4, title: "Trustworthy", type: "Attribute", hymn: "Great Is Thy Faithfulness" },
          { number: 5, title: "Jim Elliot", type: "Biography", hymn: "I Surrender All" }
        ]
      },
      {
        number: 4,
        title: "God's Character",
        memoryVerse: "Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory! (Isaiah 6:3)",
        days: [
          { number: 1, title: "What Is God?", type: "Catechism", hymn: "Immortal, Invisible, God Only Wise" },
          { number: 2, title: "Fear of the Lord", type: "Wisdom", hymn: "Holy, Holy, Holy" },
          { number: 3, title: "Where Is God?", type: "Catechism", hymn: "He's Got the Whole World" },
          { number: 4, title: "Spirit", type: "Attribute", hymn: "Breathe on Me, Breath of God" },
          { number: 5, title: "C.S. Lewis", type: "Biography", hymn: "Be Thou My Vision" }
        ]
      },
      {
        number: 5,
        title: "God's Providence",
        memoryVerse: "And we know that for those who love God all things work together for good. (Romans 8:28)",
        days: [
          { number: 1, title: "What Are God's Works of Creation?", type: "Catechism", hymn: "How Great Thou Art" },
          { number: 2, title: "Stewardship", type: "Wisdom", hymn: "Take My Life, and Let It Be" },
          { number: 3, title: "What Did God Do When He Created Man?", type: "Catechism", hymn: "Praise to the Lord, the Almighty" },
          { number: 4, title: "Sovereign", type: "Attribute", hymn: "All Hail the Power of Jesus' Name" },
          { number: 5, title: "George Müller", type: "Biography", hymn: "Now Thank We All Our God" }
        ]
      },
      {
        number: 6,
        title: "The Fall and Redemption",
        memoryVerse: "But God shows his love for us in that while we were still sinners, Christ died for us. (Romans 5:8)",
        days: [
          { number: 1, title: "What Are God's Works of Providence?", type: "Catechism", hymn: "Guide Me, O Thou Great Jehovah" },
          { number: 2, title: "Sorrow", type: "Wisdom", hymn: "Rock of Ages, Cleft for Me" },
          { number: 3, title: "What Special Act of Providence Did God Exercise?", type: "Catechism", hymn: "O Sacred Head, Now Wounded" },
          { number: 4, title: "Savior", type: "Attribute", hymn: "Jesus, Lover of My Soul" },
          { number: 5, title: "John Newton", type: "Biography", hymn: "Amazing Grace" }
        ]
      },
      {
        number: 7,
        title: "God's Law",
        memoryVerse: "Oh how I love your law! It is my meditation all the day. (Psalm 119:97)",
        days: [
          { number: 1, title: "Did Our First Parents Continue?", type: "Catechism", hymn: "Trust and Obey" },
          { number: 2, title: "God's Commandments", type: "Wisdom", hymn: "How Firm a Foundation" },
          { number: 3, title: "What Is Sin?", type: "Catechism", hymn: "O for a Thousand Tongues" },
          { number: 4, title: "Just", type: "Attribute", hymn: "Crown Him with Many Crowns" },
          { number: 5, title: "Martin Luther", type: "Biography", hymn: "When I Survey the Wondrous Cross" }
        ]
      },
      {
        number: 8,
        title: "Disobedience and Consequences",
        memoryVerse: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord. (Romans 6:23)",
        days: [
          { number: 1, title: "What Was the Sin of Our First Parents?", type: "Catechism", hymn: "Come, Thou Fount of Every Blessing" },
          { number: 2, title: "Foolishness", type: "Wisdom", hymn: "Teach Me Thy Way, O Lord" },
          { number: 3, title: "Did All Mankind Fall?", type: "Catechism", hymn: "Jesus Paid It All" },
          { number: 4, title: "Wrathful", type: "Attribute", hymn: "There Is a Fountain" },
          { number: 5, title: "Jonathan Edwards", type: "Biography", hymn: "Before the Throne of God Above" }
        ]
      },
      {
        number: 9,
        title: "The Fall and Its Effects",
        memoryVerse: "Therefore, just as sin came into the world through one man, and death through sin, so death spread to all men because all sinned. (Romans 5:12)",
        days: [
          { number: 1, title: "Into What Estate Did the Fall Bring Mankind?", type: "Catechism", hymn: "Alas! And Did My Savior Bleed" },
          { number: 2, title: "Repentance", type: "Wisdom", hymn: "Just As I Am" },
          { number: 3, title: "Wherein Consists the Sinfulness?", type: "Catechism", hymn: "Nothing but the Blood" },
          { number: 4, title: "Holy", type: "Attribute", hymn: "Holy God, We Praise Thy Name" },
          { number: 5, title: "Augustine of Hippo", type: "Biography", hymn: "Come, Ye Sinners, Poor and Needy" }
        ]
      },
      {
        number: 10,
        title: "Sin's Misery",
        memoryVerse: "The soul who sins shall die. (Ezekiel 18:20)",
        days: [
          { number: 1, title: "What Is the Misery of That Estate?", type: "Catechism", hymn: "Man of Sorrows! What a Name" },
          { number: 2, title: "Hope", type: "Wisdom", hymn: "My Hope Is Built" },
          { number: 3, title: "Did God Leave All Mankind to Perish?", type: "Catechism", hymn: "The God of Abraham Praise" },
          { number: 4, title: "Merciful", type: "Attribute", hymn: "There's a Wideness in God's Mercy" },
          { number: 5, title: "John Bunyan", type: "Biography", hymn: "He Leadeth Me" }
        ]
      },
      {
        number: 11,
        title: "Our Redeemer",
        memoryVerse: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. (John 3:16)",
        days: [
          { number: 1, title: "Who Is the Redeemer?", type: "Catechism", hymn: "O Come, O Come, Emmanuel" },
          { number: 2, title: "Gratitude", type: "Wisdom", hymn: "Count Your Blessings" },
          { number: 3, title: "How Did Christ Become Man?", type: "Catechism", hymn: "Hark! The Herald Angels Sing" },
          { number: 4, title: "Redeemer", type: "Attribute", hymn: "Redeemed, How I Love to Proclaim It" },
          { number: 5, title: "Charles Haddon Spurgeon", type: "Biography", hymn: "Tell Me the Old, Old Story" }
        ]
      }
    ];
  }

  // Setup event listeners
  setupEventListeners() {
    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    if (sidebarToggle && sidebar && sidebarOverlay) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
      });

      // Close sidebar
      const closeSidebar = () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
      };

      sidebarClose?.addEventListener('click', closeSidebar);
      sidebarOverlay.addEventListener('click', closeSidebar);

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
          closeSidebar();
        }
      });
    }
  }

  // Render sidebar navigation
  renderSidebarNav() {
    console.log('Rendering sidebar navigation...');
    const container = document.getElementById('weeksNav');
    console.log('Container found:', container);
    console.log('Weeks data:', this.weeks.length, 'weeks');
    
    if (!container) {
      console.error('weeksNav container not found!');
      return;
    }

    const html = this.weeks.map(week => `
      <div class="week-nav-item" data-week="${week.number}" onclick="devotionalApp.toggleWeekNav(${week.number})">
        <div class="week-title-nav">Week ${week.number}: ${week.title}</div>
        <div class="week-days">
          ${week.days.map(day => `
            <button class="day-nav-item" onclick="event.stopPropagation(); devotionalApp.loadDay(${week.number}, ${day.number})">
              ${day.number}. ${day.title}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
    
    console.log('Generated HTML length:', html.length);
    container.innerHTML = html;
    console.log('Sidebar navigation rendered successfully');
  }

  // Toggle week in sidebar navigation
  toggleWeekNav(weekNumber) {
    // Close all other weeks
    document.querySelectorAll('.week-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Open selected week
    const weekItem = document.querySelector(`[data-week="${weekNumber}"]`);
    if (weekItem) {
      weekItem.classList.add('active');
      this.currentWeek = weekNumber;
    }
  }

  // Show home page
  showHome() {
    const homeContent = document.getElementById('homeContent');
    const dynamicContent = document.getElementById('dynamicContent');
    const indexContent = document.getElementById('indexContent');
    const categoryContent = document.getElementById('categoryContent');
    
    if (homeContent) {
      homeContent.style.display = 'block';
      if (dynamicContent) dynamicContent.style.display = 'none';
      if (indexContent) indexContent.style.display = 'none';
      if (categoryContent) categoryContent.style.display = 'none';
      
      this.isShowingHome = true;
      this.currentWeek = null;
      this.currentDay = null;
      
      // Update navigation button states
      const homeButton = document.querySelector('.home-button');
      const indexButton = document.querySelector('.index-button');
      if (homeButton) homeButton.classList.add('active');
      if (indexButton) indexButton.classList.remove('active');
      
      // Clear week selection
      document.querySelectorAll('.week-nav-item').forEach(item => {
        item.classList.remove('active');
      });
    }
  }

  // Show index page
  showIndex() {
    const homeContent = document.getElementById('homeContent');
    const dynamicContent = document.getElementById('dynamicContent');
    const indexContent = document.getElementById('indexContent');
    const categoryContent = document.getElementById('categoryContent');
    
    if (indexContent) {
      if (homeContent) homeContent.style.display = 'none';
      if (dynamicContent) dynamicContent.style.display = 'none';
      indexContent.style.display = 'block';
      if (categoryContent) categoryContent.style.display = 'none';
      
      this.isShowingHome = false;
      this.currentWeek = null;
      this.currentDay = null;
      
      // Update navigation button states
      const homeButton = document.querySelector('.home-button');
      const indexButton = document.querySelector('.index-button');
      if (homeButton) homeButton.classList.remove('active');
      if (indexButton) indexButton.classList.add('active');
      
      // Clear week selection
      document.querySelectorAll('.week-nav-item').forEach(item => {
        item.classList.remove('active');
      });
    }
  }

  // Show lesson category
  showLessonCategory(category) {
    const homeContent = document.getElementById('homeContent');
    const dynamicContent = document.getElementById('dynamicContent');
    const indexContent = document.getElementById('indexContent');
    const categoryContent = document.getElementById('categoryContent');
    
    if (categoryContent) {
      if (homeContent) homeContent.style.display = 'none';
      if (dynamicContent) dynamicContent.style.display = 'none';
      if (indexContent) indexContent.style.display = 'none';
      categoryContent.style.display = 'block';
      
      this.isShowingHome = false;
      this.currentWeek = null;
      this.currentDay = null;
      
      // Update navigation button states
      const homeButton = document.querySelector('.home-button');
      const indexButton = document.querySelector('.index-button');
      if (homeButton) homeButton.classList.remove('active');
      if (indexButton) indexButton.classList.remove('active');
      
      // Clear week selection
      document.querySelectorAll('.week-nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Generate category content
      this.renderLessonCategory(category);
    }
  }

  // Render lesson category page
  renderLessonCategory(category) {
    const categoryContent = document.getElementById('categoryContent');
    if (!categoryContent) return;
    
    const lessons = this.getLessonsByCategory(category);
    const categoryTitle = this.getCategoryTitle(category);
    const categoryIcon = this.getCategoryIcon(category);
    
    categoryContent.innerHTML = `
      <div class="category-page">
        <div class="page-header">
          <button class="back-button modern-back-btn" onclick="devotionalApp.showIndex()">
            <span class="back-icon">←</span>
            <span class="back-text">Back to Index</span>
          </button>
          <div class="category-page-title">
            <span class="category-page-icon">${categoryIcon}</span>
            <h1 class="page-title">${categoryTitle}</h1>
          </div>
          <p class="page-subtitle">${lessons.length} lessons available</p>
        </div>
        
        <div class="lessons-grid">
          ${lessons.map(lesson => `
            <div class="lesson-card modern-card" onclick="devotionalApp.loadDay(${lesson.week}, ${lesson.day})">
              <div class="lesson-header">
                <h3 class="lesson-title">${lesson.title}</h3>
                <div class="lesson-meta">Week ${lesson.week}, Day ${lesson.day}</div>
              </div>
              <div class="lesson-arrow">→</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Get lessons by category
  getLessonsByCategory(category) {
    const lessons = [];
    
    this.weeks.forEach(week => {
      week.days.forEach(day => {
        let matches = false;
        
        switch(category) {
          case 'catechism':
            matches = day.type === 'Catechism';
            break;
          case 'wisdom':
            matches = day.type === 'Wisdom';
            break;
          case 'attributes':
            matches = day.type === 'Attribute';
            break;
          case 'biographies':
            matches = day.type === 'Biography';
            break;
        }
        
        if (matches) {
          lessons.push({
            week: week.number,
            day: day.number,
            title: day.title,
            type: day.type
          });
        }
      });
    });
    
    return lessons;
  }

  // Get category title
  getCategoryTitle(category) {
    switch(category) {
      case 'catechism': return 'Catechism Lessons';
      case 'wisdom': return 'Wisdom Lessons';
      case 'attributes': return 'God\'s Attributes';
      case 'biographies': return 'Mini Biographies';
      default: return 'Lessons';
    }
  }

  // Get category icon
  getCategoryIcon(category) {
    switch(category) {
      case 'catechism': return '📖';
      case 'wisdom': return '💡';
      case 'attributes': return '✨';
      case 'biographies': return '👥';
      default: return '📚';
    }
  }

  // Load day content
  async loadDay(weekNumber, dayNumber) {
    this.currentWeek = weekNumber;
    this.currentDay = dayNumber;
    this.isShowingHome = false;

    const homeContent = document.getElementById('homeContent');
    const dynamicContent = document.getElementById('dynamicContent');
    const indexContent = document.getElementById('indexContent');
    const categoryContent = document.getElementById('categoryContent');
    
    if (dynamicContent) {
      if (homeContent) homeContent.style.display = 'none';
      if (indexContent) indexContent.style.display = 'none';
      if (categoryContent) categoryContent.style.display = 'none';
      dynamicContent.style.display = 'block';
      
      // Update navigation states
      const homeButton = document.querySelector('.home-button');
      if (homeButton) {
        homeButton.classList.remove('active');
      }
      
      this.toggleWeekNav(weekNumber);
    }
    
    // Show loading state
    dynamicContent.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
      </div>
    `;

    try {
      // Load week data from JSON
      console.log(`Loading week ${weekNumber}, day ${dayNumber} from JSON...`);
      const weekData = await this.loadWeekData(weekNumber);
      const dayData = weekData.days.find(d => d.number === dayNumber);
      
      if (!dayData) {
        throw new Error(`Day ${dayNumber} not found in week ${weekNumber}`);
      }

      console.log('Day data loaded:', dayData);

      // Create content using template system with JSON data
      const contentData = {
        week: weekNumber,
        day: dayNumber,
        weekTitle: weekData.title,
        title: dayData.title,
        type: dayData.type,
        hymn: dayData.hymn,
        memoryVerse: weekData.memoryVerse,
        content: dayData.content.map(paragraph => `<p>${paragraph}</p>`).join(''),
        prayerPoints: dayData.prayerPoints,
        ...this.getSpecificContentData(dayData)
      };

      console.log('Using JSON data for template generation');
      const templateContent = devotionTemplate.createDailyPage(contentData);
      dynamicContent.innerHTML = `<div class="fade-in">${templateContent}</div>`;
      
    } catch (error) {
      console.error('Error loading day content:', error);
      console.log('Falling back to old template generation');
      // Fallback to template generation
      const templateContent = this.generateDayContent(weekNumber, dayNumber);
      dynamicContent.innerHTML = `<div class="fade-in">${templateContent}</div>`;
    }

    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebarOverlay) {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    }
  }

  // Load week JSON data
  async loadWeekData(weekNumber) {
    try {
      const paths = [
        `./content/weeks/week${weekNumber}.json`,
        `content/weeks/week${weekNumber}.json`,
        `/content/weeks/week${weekNumber}.json`
      ];
      
      for (const path of paths) {
        try {
          const response = await fetch(path);
          if (response.ok) {
            const data = await response.json();
            console.log(`Successfully loaded week data from ${path}`);
            return data.week;
          }
        } catch (e) {
          console.log(`Failed to load from ${path}: ${e.message}`);
        }
      }
      
      throw new Error(`Week data not found for week ${weekNumber}`);
    } catch (error) {
      console.log(`Failed to load week data: ${error.message}`);
      throw error;
    }
  }

  // Generate day content using template system
  generateDayContent(weekNumber, dayNumber) {
    const week = this.weeks.find(w => w.number === weekNumber);
    const day = week?.days.find(d => d.number === dayNumber);
    
    if (!week || !day) return '<p>Content not found.</p>';

    // Create base content data
    const contentData = devotionTemplate.createContentData(weekNumber, dayNumber, {
      content: `
        <p><em>This lesson content is currently being prepared. Please check back soon for the full devotional content.</em></p>
      `,
      prayerPoints: [
        'Thank God for His love and faithfulness',
        'Ask God to help us understand His Word',
        'Pray for wisdom to live according to His will',
        'Ask God to help us share His love with others'
      ]
    }, this.getSpecificContentData(weekNumber, dayNumber, day.type));

    return devotionTemplate.createDailyPage(contentData);
  }

  // Get specific content data from JSON day data
  getSpecificContentData(dayData) {
    switch (dayData.type) {
      case 'Catechism':
        return {
          question: dayData.catechism.question,
          answer: dayData.catechism.answer,
          catechismNumber: dayData.catechism.questionNumber
        };
      case 'Wisdom':
        return {
          lessonVerse: dayData.lessonVerse
        };
      case 'Attribute':
        return {
          attribute: dayData.attribute,
          lessonVerse: dayData.lessonVerse
        };
      case 'Biography':
        return {
          person: dayData.person.name,
          dates: dayData.person.dates,
          description: dayData.person.description
        };
      default:
        return {};
    }
  }

  // Get catechism questions (simplified for children)
  getCatechismQuestion(weekNumber, dayNumber) {
    const questions = {
      '1-1': 'Who made you?',
      '1-3': 'What else did God make?',
      '2-1': 'How can you glorify God?',
      '2-3': 'Why did God make you and all things?',
      '3-1': 'Are there more gods than one?',
      '3-3': 'How many persons are there in God?',
      '4-1': 'What is God?',
      '4-3': 'Where is God?',
      '5-1': 'What are God\'s works of creation?',
      '5-3': 'What did God do when He created man?',
      '6-1': 'What are God\'s works of providence?',
      '6-3': 'What special act of providence did God exercise toward man?',
      '7-1': 'Did our first parents continue in the state they were created?',
      '7-3': 'What is sin?',
      '8-1': 'What was the sin whereby our first parents fell?',
      '8-3': 'Did all mankind fall in Adam\'s first transgression?',
      '9-1': 'Into what estate did the fall bring mankind?',
      '9-3': 'Wherein consists the sinfulness of that estate?',
      '10-1': 'What is the misery of that estate?',
      '10-3': 'Did God leave all mankind to perish?',
      '11-1': 'Who is the Redeemer of God\'s elect?',
      '11-3': 'How did Christ, being the Son of God, become man?'
    };
    
    return questions[`${weekNumber}-${dayNumber}`] || 'Question will be added soon.';
  }

  // Get catechism answers (simplified for children)
  getCatechismAnswer(weekNumber, dayNumber) {
    const answers = {
      '1-1': 'God made me.',
      '1-3': 'God made all things.',
      '2-1': 'By loving Him and doing what He commands.',
      '2-3': 'For His own glory.',
      '3-1': 'There is only one God.',
      '3-3': 'There are three persons in God: the Father, the Son, and the Holy Spirit.',
      '4-1': 'God is a Spirit, infinite, eternal, and unchangeable.',
      '4-3': 'God is everywhere.',
      '5-1': 'God\'s works of creation are His making all things out of nothing, by the word of His power, in six days, and all very good.',
      '5-3': 'God created man, male and female, after His own image, in knowledge, righteousness, and holiness, with dominion over the creatures.',
      '6-1': 'God\'s works of providence are His most holy, wise, and powerful preserving and governing of all His creatures, and all their actions.',
      '6-3': 'When God created man, He made a covenant of life with him, upon condition of perfect obedience.',
      '7-1': 'Our first parents, being left to the freedom of their own will, fell from the state wherein they were created, by sinning against God.',
      '7-3': 'Sin is any want of conformity unto, or transgression of, the law of God.',
      '8-1': 'The sin whereby our first parents fell from the state wherein they were created, was their eating the forbidden fruit.',
      '8-3': 'The covenant being made with Adam, not only for himself, but for his posterity; all mankind, descending from him by ordinary generation, sinned in him, and fell with him, in his first transgression.',
      '9-1': 'The fall brought mankind into an estate of sin and misery.',
      '9-3': 'The sinfulness of that estate whereinto man fell, consists in the guilt of Adam\'s first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called Original Sin; together with all actual transgressions which proceed from it.',
      '10-1': 'All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all the miseries of this life, to death itself, and to the pains of hell forever.',
      '10-3': 'God, having out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.',
      '11-1': 'The only Redeemer of God\'s elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.',
      '11-3': 'Christ, the Son of God, became man, by taking to himself a true body, and a reasonable soul, being conceived by the power of the Holy Ghost, in the womb of the Virgin Mary, and born of her, yet without sin.'
    };
    
    return answers[`${weekNumber}-${dayNumber}`] || 'Answer will be added soon.';
  }

  // Get catechism number for question tracking
  getCatechismNumber(weekNumber, dayNumber) {
    // Map week/day combinations to catechism question numbers
    const catechismMap = {
      '1-1': 1, '1-3': 2, '2-1': 3, '2-3': 4, '3-1': 5, '3-3': 6,
      '4-1': 7, '4-3': 8, '5-1': 9, '5-3': 10, '6-1': 11, '6-3': 12,
      '7-1': 13, '7-3': 14, '8-1': 15, '8-3': 16, '9-1': 17, '9-3': 18,
      '10-1': 19, '10-3': 20, '11-1': 21, '11-3': 22
    };
    return catechismMap[`${weekNumber}-${dayNumber}`] || weekNumber;
  }

  // Get wisdom verses for Day 2
  getWisdomVerse(weekNumber, dayNumber) {
    const wisdomVerses = {
      '1-2': 'The beginning of wisdom is this: Get wisdom, and whatever you get, get insight. (Proverbs 4:7)',
      '2-2': 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction. (Proverbs 1:7)',
      '3-2': 'Trust in the LORD with all your heart, and do not lean on your own understanding. (Proverbs 3:5)',
      '4-2': 'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight. (Proverbs 9:10)',
      '5-2': 'Honor the LORD with your wealth and with the firstfruits of all your produce. (Proverbs 3:9)',
      '6-2': 'Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death. (2 Corinthians 7:10)',
      '7-2': 'Keep my commandments and live; keep my teaching as the apple of your eye. (Proverbs 7:2)',
      '8-2': 'The way of a fool is right in his own eyes, but a wise man listens to advice. (Proverbs 12:15)',
      '9-2': 'Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy. (Proverbs 28:13)',
      '10-2': 'Hope deferred makes the heart sick, but a desire fulfilled is a tree of life. (Proverbs 13:12)',
      '11-2': 'I will praise the name of God with a song; I will magnify him with thanksgiving. (Psalm 69:30)'
    };
    return wisdomVerses[`${weekNumber}-${dayNumber}`] || 'Wisdom verse will be added soon.';
  }

  // Get God's attributes for Day 4
  getAttribute(weekNumber, dayNumber) {
    const attributes = {
      1: 'Creative', 2: 'True', 3: 'Trustworthy', 4: 'Spirit', 5: 'Sovereign',
      6: 'Savior', 7: 'Just', 8: 'Wrathful', 9: 'Holy', 10: 'Merciful', 11: 'Redeemer'
    };
    return attributes[weekNumber] || 'Attribute';
  }

  // Get attribute verses
  getAttributeVerse(weekNumber, dayNumber) {
    const attributeVerses = {
      1: 'How many are Your works, Lord! In wisdom You made them all; the earth is full of Your creatures. (Psalm 104:24)',
      2: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me." (John 14:6)',
      3: 'And those who know your name put their trust in you, for you, O Lord, have not forsaken those who seek you. (Psalm 9:10)',
      4: 'God is spirit, and those who worship him must worship in spirit and truth. (John 4:24)',
      5: 'The Lord has established his throne in the heavens, and his kingdom rules over all. (Psalm 103:19)',
      6: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. (John 3:16)',
      7: 'The Rock, his work is perfect, for all his ways are justice. A God of faithfulness and without iniquity, just and upright is he. (Deuteronomy 32:4)',
      8: 'For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men. (Romans 1:18)',
      9: 'And one called to another and said: "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!" (Isaiah 6:3)',
      10: 'The Lord is merciful and gracious, slow to anger and abounding in steadfast love. (Psalm 103:8)',
      11: 'Thus says the Lord, the King of Israel and his Redeemer, the Lord of hosts: "I am the first and I am the last; besides me there is no god." (Isaiah 44:6)'
    };
    return attributeVerses[weekNumber] || 'Attribute verse will be added soon.';
  }

  // Get biography persons for Day 5
  getBiographyPerson(weekNumber, dayNumber) {
    const persons = {
      1: 'Michael Faraday', 2: 'William Tyndale', 3: 'Jim Elliot', 4: 'C.S. Lewis', 5: 'George Müller',
      6: 'John Newton', 7: 'Martin Luther', 8: 'Jonathan Edwards', 9: 'Augustine of Hippo',
      10: 'John Bunyan', 11: 'Charles Haddon Spurgeon'
    };
    return persons[weekNumber] || 'Historical Figure';
  }

  // Get biography dates
  getBiographyDates(weekNumber, dayNumber) {
    const dates = {
      1: '1791-1867', 2: '1494-1536', 3: '1927-1956', 4: '1898-1963', 5: '1805-1898',
      6: '1725-1807', 7: '1483-1546', 8: '1703-1758', 9: '354-430',
      10: '1628-1688', 11: '1834-1892'
    };
    return dates[weekNumber] || 'Historical Figure';
  }

  // Get biography descriptions
  getBiographyDescription(weekNumber, dayNumber) {
    const descriptions = {
      1: 'Scientist who saw God\'s handiwork in electricity and magnetism',
      2: 'Translator who worked to make God\'s Word available to ordinary people',
      3: 'Missionary who trusted God completely and gave his life sharing Jesus',
      4: 'Author who wrote stories that help us understand God\'s character',
      5: 'Orphanage director who trusted God to provide for thousands of children',
      6: 'Former slave trader saved by God\'s grace who wrote "Amazing Grace"',
      7: 'Reformer who helped people understand salvation by faith in Jesus',
      8: 'Preacher who helped people understand the seriousness of sin and greatness of salvation',
      9: 'Teacher who lived a sinful life before God changed his heart',
      10: 'Author of "Pilgrim\'s Progress" about the journey from sin to salvation',
      11: 'The "Prince of Preachers" who helped many understand Jesus\' love'
    };
    return descriptions[weekNumber] || 'A faithful Christian who loved and served God';
  }

  // Navigate to a specific week and day
  navigateTo(weekNumber, dayNumber = null) {
    if (dayNumber) {
      this.loadDay(weekNumber, dayNumber);
    } else {
      this.toggleWeekNav(weekNumber);
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, devotional app initializing...');
  console.log('Template system available:', typeof window.devotionTemplate !== 'undefined');
  
  // Small delay to ensure all scripts are loaded
  setTimeout(() => {
    window.devotionalApp = new DevotionalApp();
    console.log('Devotional app initialized:', window.devotionalApp);
  }, 100);
});

// Service worker registration for offline capability (optional enhancement)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
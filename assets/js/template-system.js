// Daily Devotion Template System
class DevotionTemplate {
  constructor() {
    this.templates = {
      catechism: this.catechismTemplate,
      wisdom: this.wisdomTemplate,
      attribute: this.attributeTemplate,
      biography: this.biographyTemplate
    };
  }

  // Main template wrapper for all day types
  createDailyPage(data) {
    const templateFunction = this.templates[data.type.toLowerCase()];
    if (!templateFunction) {
      throw new Error(`Template not found for type: ${data.type}`);
    }

    return `
      <div class="daily-content">
        <div class="daily-header">
          <div class="breadcrumb">
            <a href="#home" onclick="devotionalApp.showHome()">Home</a> 
            <span>›</span> 
            <span>Week ${data.week}</span> 
            <span>›</span> 
            <span>Day ${data.day}</span>
          </div>
          <div class="header-content">
            <h1 class="daily-title">${data.title}</h1>
            <div class="header-meta">
              <div class="week-info">Week ${data.week}: ${data.weekTitle}</div>
              <div class="day-info">Day ${data.day} • ${data.type}</div>
            </div>
          </div>
        </div>

        <div class="memory-verse-section">
          <h3>Weekly Memory Verse</h3>
          <p class="verse-text">${data.memoryVerse}</p>
        </div>

        ${templateFunction.call(this, data)}

        <div class="lesson-content">
          ${data.content}
        </div>

        <div class="hymn-section">
          <h3>Today's Hymn</h3>
          <p class="hymn-title">${data.hymn}</p>
          <p class="hymn-instruction">Sing this hymn together as a family, or listen to it online.</p>
        </div>

        <div class="prayer-section">
          <h3>Prayer Time</h3>
          <div class="prayer-points">
            ${data.prayerPoints.map(point => `<div class="prayer-item">• ${point}</div>`).join('')}
          </div>
        </div>

        <div class="daily-footer">
          <div class="navigation-buttons">
            ${data.day > 1 ? `<button class="btn btn-secondary" onclick="devotionalApp.loadDay(${data.week}, ${data.day - 1})">← Previous Day</button>` : ''}
            ${data.day < 5 ? `<button class="btn btn-primary" onclick="devotionalApp.loadDay(${data.week}, ${data.day + 1})">Next Day →</button>` : ''}
            ${data.day === 5 && data.week < 52 ? `<button class="btn btn-primary" onclick="devotionalApp.loadDay(${data.week + 1}, 1)">Next Week →</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // Catechism template (Days 1 & 3)
  catechismTemplate(data) {
    return `
      <div class="catechism-section">
        <h3>Question & Answer</h3>
        <div class="qa-container">
          <div class="question-box">
            <strong>Question ${data.catechismNumber}:</strong> ${data.question}
          </div>
          <div class="answer-box">
            <strong>Answer:</strong> ${data.answer}
          </div>
        </div>
      </div>
    `;
  }

  // Wisdom template (Day 2)
  wisdomTemplate(data) {
    return `
      <div class="wisdom-section">
        <h3>Today's Wisdom</h3>
        <div class="lesson-verse-box">
          <p class="verse-text">${data.lessonVerse}</p>
        </div>
      </div>
    `;
  }

  // Attribute template (Day 4)
  attributeTemplate(data) {
    return `
      <div class="attribute-section">
        <h3>God's Character: ${data.attribute}</h3>
        <div class="lesson-verse-box">
          <p class="verse-text">${data.lessonVerse}</p>
        </div>
      </div>
    `;
  }

  // Biography template (Day 5)
  biographyTemplate(data) {
    return `
      <div class="biography-section">
        <h3>Meet: ${data.person}</h3>
        <div class="biography-intro">
          <p class="person-dates">${data.dates || 'Historical Figure'}</p>
          <p class="person-description">${data.description}</p>
        </div>
      </div>
    `;
  }

  // Helper method to create content data structure
  createContentData(weekNumber, dayNumber, baseData, specificData = {}) {
    const week = devotionalApp.weeks.find(w => w.number === weekNumber);
    const day = week?.days.find(d => d.number === dayNumber);
    
    if (!week || !day) {
      throw new Error(`Week ${weekNumber}, Day ${dayNumber} not found`);
    }

    return {
      week: weekNumber,
      day: dayNumber,
      weekTitle: week.title,
      title: day.title,
      type: day.type,
      hymn: day.hymn,
      memoryVerse: week.memoryVerse,
      content: baseData.content || '',
      prayerPoints: baseData.prayerPoints || [
        'Thank God for His love and faithfulness',
        'Ask for wisdom to understand His Word',
        'Pray for help to live according to His will'
      ],
      ...specificData
    };
  }
}

// Make template system globally available
window.devotionTemplate = new DevotionTemplate();
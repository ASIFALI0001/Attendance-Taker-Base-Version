 // Login functionality
 document.addEventListener('DOMContentLoaded', function () {
    // Show login page, hide dashboard initially
    document.getElementById('login-page').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';

    // Set up login button
    document.getElementById('login-button').addEventListener('click', function () {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');

      // Check credentials
      if (email === 'teacher1@gmail.com' && password === '1234') {
        // Hide login, show dashboard
        document.getElementById('login-page').style.display = 'none';
        document.querySelector('.container').style.display = 'block';

        // Initialize dashboard
        updateClock();
        initializeDragAndDrop();
      } else {
        // Show error message
        errorMessage.textContent = 'Incorrect email or password';

        // Clear error after 3 seconds
        setTimeout(() => {
          errorMessage.textContent = '';
        }, 3000);
      }
    });

    // Allow Enter key to submit login
    document.getElementById('password').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.getElementById('login-button').click();
      }
    });
  });
  // Sample data for different subjects
  const subjectsData = {
    'advanced-mathematics': {
      title: 'Advanced Mathematics',
      students: {
        present: [
          { id: 1, name: 'Aisha Khan', roll: 'CS-2021-001', image: '/api/placeholder/40/40' },
          { id: 2, name: 'Muhammad Ali', roll: 'CS-2021-002', image: '/api/placeholder/40/40' },
          { id: 3, name: 'Fatima Zahra', roll: 'CS-2021-003', image: '/api/placeholder/40/40' },
          { id: 4, name: 'Ahmed Hassan', roll: 'CS-2021-004', image: '/api/placeholder/40/40' },
          { id: 5, name: 'Zara Malik', roll: 'CS-2021-005', image: '/api/placeholder/40/40' },
          { id: 6, name: 'Omar Farooq', roll: 'CS-2021-006', image: '/api/placeholder/40/40' },
          { id: 7, name: 'Sana Sharif', roll: 'CS-2021-007', image: '/api/placeholder/40/40' },
          { id: 8, name: 'Bilal Ahmed', roll: 'CS-2021-008', image: '/api/placeholder/40/40' },
          { id: 9, name: 'Noor Fatima', roll: 'CS-2021-009', image: '/api/placeholder/40/40' },
          { id: 10, name: 'Hamza Khan', roll: 'CS-2021-010', image: '/api/placeholder/40/40' },
          { id: 11, name: 'Ayesha Tariq', roll: 'CS-2021-011', image: '/api/placeholder/40/40' },
          { id: 12, name: 'Usman Ali', roll: 'CS-2021-012', image: '/api/placeholder/40/40' },
          { id: 13, name: 'Mehwish Rahman', roll: 'CS-2021-013', image: '/api/placeholder/40/40' },
          { id: 14, name: 'Ali Raza', roll: 'CS-2021-014', image: '/api/placeholder/40/40' },
          { id: 15, name: 'Sara Ahmed', roll: 'CS-2021-015', image: '/api/placeholder/40/40' }
        ],
        absent: [
          { id: 16, name: 'Imran Yousef', roll: 'CS-2021-016', image: '/api/placeholder/40/40' },
          { id: 17, name: 'Hina Batool', roll: 'CS-2021-017', image: '/api/placeholder/40/40' },
          { id: 18, name: 'Faisal Khan', roll: 'CS-2021-018', image: '/api/placeholder/40/40' }
        ],
        issues: [
          { id: 19, name: 'Mehreen Ali', roll: 'CS-2021-019', image: '/api/placeholder/40/40', issue: 'facial' },
          { id: 20, name: 'Hassan Ahmed', roll: 'CS-2021-020', image: '/api/placeholder/40/40', issue: 'network' }
        ]
      }
    },
    'computer-networks': {
      title: 'Computer Networks',
      students: {
        present: [
          { id: 1, name: 'Aisha Khan', roll: 'CS-2021-001', image: '/api/placeholder/40/40' },
          { id: 2, name: 'Muhammad Ali', roll: 'CS-2021-002', image: '/api/placeholder/40/40' },
          { id: 3, name: 'Fatima Zahra', roll: 'CS-2021-003', image: '/api/placeholder/40/40' },
          { id: 4, name: 'Ahmed Hassan', roll: 'CS-2021-004', image: '/api/placeholder/40/40' },
          { id: 5, name: 'Zara Malik', roll: 'CS-2021-005', image: '/api/placeholder/40/40' },
          { id: 6, name: 'Omar Farooq', roll: 'CS-2021-006', image: '/api/placeholder/40/40' },
          { id: 7, name: 'Sana Sharif', roll: 'CS-2021-007', image: '/api/placeholder/40/40' },
          { id: 8, name: 'Bilal Ahmed', roll: 'CS-2021-008', image: '/api/placeholder/40/40' },
          { id: 9, name: 'Noor Fatima', roll: 'CS-2021-009', image: '/api/placeholder/40/40' },
          { id: 10, name: 'Hamza Khan', roll: 'CS-2021-010', image: '/api/placeholder/40/40' },
          { id: 11, name: 'Ayesha Tariq', roll: 'CS-2021-011', image: '/api/placeholder/40/40' },
          { id: 12, name: 'Usman Ali', roll: 'CS-2021-012', image: '/api/placeholder/40/40' },
          { id: 13, name: 'Mehwish Rahman', roll: 'CS-2021-013', image: '/api/placeholder/40/40' },
          { id: 14, name: 'Ali Raza', roll: 'CS-2021-014', image: '/api/placeholder/40/40' },
          { id: 15, name: 'Sara Ahmed', roll: 'CS-2021-015', image: '/api/placeholder/40/40' },
          { id: 16, name: 'Imran Yousef', roll: 'CS-2021-016', image: '/api/placeholder/40/40' },
          { id: 17, name: 'Hina Batool', roll: 'CS-2021-017', image: '/api/placeholder/40/40' },
          { id: 18, name: 'Faisal Khan', roll: 'CS-2021-018', image: '/api/placeholder/40/40' }
        ],
        absent: [
          { id: 19, name: 'Mehreen Ali', roll: 'CS-2021-019', image: '/api/placeholder/40/40' }
        ],
        issues: [
          { id: 20, name: 'Hassan Ahmed', roll: 'CS-2021-020', image: '/api/placeholder/40/40', issue: 'network' }
        ]
      }
    },
    'data-structures': {
      title: 'Data Structures',
      students: {
        present: [
          { id: 1, name: 'Aisha Khan', roll: 'CS-2021-001', image: '/api/placeholder/40/40' },
          { id: 2, name: 'Muhammad Ali', roll: 'CS-2021-002', image: '/api/placeholder/40/40' },
          { id: 3, name: 'Fatima Zahra', roll: 'CS-2021-003', image: '/api/placeholder/40/40' },
          { id: 4, name: 'Ahmed Hassan', roll: 'CS-2021-004', image: '/api/placeholder/40/40' },
          { id: 5, name: 'Zara Malik', roll: 'CS-2021-005', image: '/api/placeholder/40/40' },
          { id: 6, name: 'Omar Farooq', roll: 'CS-2021-006', image: '/api/placeholder/40/40' },
          { id: 7, name: 'Sana Sharif', roll: 'CS-2021-007', image: '/api/placeholder/40/40' },
          { id: 8, name: 'Bilal Ahmed', roll: 'CS-2021-008', image: '/api/placeholder/40/40' },
          { id: 10, name: 'Hamza Khan', roll: 'CS-2021-010', image: '/api/placeholder/40/40' },
          { id: 11, name: 'Ayesha Tariq', roll: 'CS-2021-011', image: '/api/placeholder/40/40' },
          { id: 12, name: 'Usman Ali', roll: 'CS-2021-012', image: '/api/placeholder/40/40' },
          { id: 13, name: 'Mehwish Rahman', roll: 'CS-2021-013', image: '/api/placeholder/40/40' },
          { id: 14, name: 'Ali Raza', roll: 'CS-2021-014', image: '/api/placeholder/40/40' },
          { id: 15, name: 'Sara Ahmed', roll: 'CS-2021-015', image: '/api/placeholder/40/40' },
          { id: 16, name: 'Imran Yousef', roll: 'CS-2021-016', image: '/api/placeholder/40/40' }
        ],
        absent: [
          { id: 17, name: 'Hina Batool', roll: 'CS-2021-017', image: '/api/placeholder/40/40' },
          { id: 18, name: 'Faisal Khan', roll: 'CS-2021-018', image: '/api/placeholder/40/40' },
          { id: 19, name: 'Mehreen Ali', roll: 'CS-2021-019', image: '/api/placeholder/40/40' },
          { id: 20, name: 'Hassan Ahmed', roll: 'CS-2021-020', image: '/api/placeholder/40/40' }
        ],
        issues: []
      }
    },
    'operating-systems': {
      title: 'Operating Systems',
      students: {
        present: [
          { id: 1, name: 'Aisha Khan', roll: 'CS-2021-001', image: '/api/placeholder/40/40' },
          { id: 2, name: 'Muhammad Ali', roll: 'CS-2021-002', image: '/api/placeholder/40/40' },
          { id: 3, name: 'Fatima Zahra', roll: 'CS-2021-003', image: '/api/placeholder/40/40' },
          { id: 4, name: 'Ahmed Hassan', roll: 'CS-2021-004', image: '/api/placeholder/40/40' },
          { id: 5, name: 'Zara Malik', roll: 'CS-2021-005', image: '/api/placeholder/40/40' },
          { id: 6, name: 'Omar Farooq', roll: 'CS-2021-006', image: '/api/placeholder/40/40' },
          { id: 7, name: 'Sana Sharif', roll: 'CS-2021-007', image: '/api/placeholder/40/40' },
          { id: 8, name: 'Bilal Ahmed', roll: 'CS-2021-008', image: '/api/placeholder/40/40' },
          { id: 9, name: 'Noor Fatima', roll: 'CS-2021-009', image: '/api/placeholder/40/40' },
          { id: 10, name: 'Hamza Khan', roll: 'CS-2021-010', image: '/api/placeholder/40/40' },
          { id: 11, name: 'Ayesha Tariq', roll: 'CS-2021-011', image: '/api/placeholder/40/40' },
          { id: 12, name: 'Usman Ali', roll: 'CS-2021-012', image: '/api/placeholder/40/40' },
          { id: 13, name: 'Mehwish Rahman', roll: 'CS-2021-013', image: '/api/placeholder/40/40' },
          { id: 14, name: 'Ali Raza', roll: 'CS-2021-014', image: '/api/placeholder/40/40' }
        ],
        absent: [
          { id: 15, name: 'Sara Ahmed', roll: 'CS-2021-015', image: '/api/placeholder/40/40' },
          { id: 16, name: 'Imran Yousef', roll: 'CS-2021-016', image: '/api/placeholder/40/40' },
          { id: 17, name: 'Hina Batool', roll: 'CS-2021-017', image: '/api/placeholder/40/40' },
          { id: 18, name: 'Faisal Khan', roll: 'CS-2021-018', image: '/api/placeholder/40/40' },
          { id: 19, name: 'Mehreen Ali', roll: 'CS-2021-019', image: '/api/placeholder/40/40' }
        ],
        issues: [
          { id: 20, name: 'Hassan Ahmed', roll: 'CS-2021-020', image: '/api/placeholder/40/40', issue: 'network' }
        ]
      }
    }
  };

  // Update the clock
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('currentTime').textContent = `${displayHours}:${displayMinutes} ${ampm}`;

    setTimeout(updateClock, 60000);
  }

  // Handle navigation
  document.getElementById('dashboard-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('dashboard-page').classList.add('active');
    document.getElementById('attendance-page').classList.remove('active');
  });

  document.getElementById('back-to-dashboard').addEventListener('click', function () {
    document.getElementById('dashboard-page').classList.add('active');
    document.getElementById('attendance-page').classList.remove('active');
  });

  // Load attendance data
  function loadAttendanceData(subjectId) {
    const subject = subjectsData[subjectId];
    if (!subject) return;

    document.getElementById('subject-title').textContent = subject.title + ' Attendance';

    // Update counts
    const presentCount = subject.students.present.length;
    const absentCount = subject.students.absent.length;
    const issuesCount = subject.students.issues.length;

    document.getElementById('present-count').textContent = presentCount;
    document.getElementById('absent-count').textContent = absentCount;
    document.getElementById('issues-count').textContent = issuesCount;

    document.querySelectorAll('.present-count').forEach(el => el.textContent = presentCount);
    document.querySelectorAll('.absent-count').forEach(el => el.textContent = absentCount);
    document.querySelectorAll('.issues-count').forEach(el => el.textContent = issuesCount);

    // Clear existing students
    document.getElementById('present-students').innerHTML = '';
    document.getElementById('absent-students').innerHTML = '';
    document.getElementById('issue-students').innerHTML = '';

    // Add present students
    subject.students.present.forEach(student => {
      const studentEl = createStudentCard(student);
      document.getElementById('present-students').appendChild(studentEl);
    });

    // Add absent students
    subject.students.absent.forEach(student => {
      const studentEl = createStudentCard(student);
      document.getElementById('absent-students').appendChild(studentEl);
    });

    // Add students with issues
    subject.students.issues.forEach(student => {
      const studentEl = createStudentCard(student, true);
      document.getElementById('issue-students').appendChild(studentEl);
    });
  }

  // Create student card
  function createStudentCard(student, hasIssue = false) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.dataset.id = student.id;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'student-image';

    const img = document.createElement('img');
    img.src = student.image;
    img.alt = student.name;
    imageDiv.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'student-info';

    const name = document.createElement('h4');
    name.textContent = student.name;

    const roll = document.createElement('p');
    roll.textContent = student.roll;

    infoDiv.appendChild(name);
    infoDiv.appendChild(roll);

    if (hasIssue && student.issue) {
      const issueTag = document.createElement('span');
      issueTag.className = `issue-tag ${student.issue}`;
      issueTag.textContent = student.issue === 'network' ? 'Network Issue' : 'Facial Recognition Issue';
      infoDiv.appendChild(issueTag);
    }

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'student-actions';

    const markPresentBtn = document.createElement('button');
    markPresentBtn.className = 'action-btn mark-present';
    markPresentBtn.innerHTML = '<i class="fas fa-check"></i>';
    markPresentBtn.title = 'Mark Present';

    const markAbsentBtn = document.createElement('button');
    markAbsentBtn.className = 'action-btn mark-absent';
    markAbsentBtn.innerHTML = '<i class="fas fa-times"></i>';
    markAbsentBtn.title = 'Mark Absent';

    actionsDiv.appendChild(markPresentBtn);
    actionsDiv.appendChild(markAbsentBtn);

    card.appendChild(imageDiv);
    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
  }

  // Set up view attendance buttons
  document.querySelectorAll('.view-attendance').forEach(button => {
    button.addEventListener('click', function () {
      const subjectId = this.closest('.subject-card').dataset.subject;
      loadAttendanceData(subjectId);
      document.getElementById('dashboard-page').classList.remove('active');
      document.getElementById('attendance-page').classList.add('active');
    });
  });

  // Initialize
  updateClock();

  // For demonstration purposes: set up the drag and drop functionality
  // Note: This is just a visual demo and doesn't actually update the data
  document.addEventListener('DOMContentLoaded', function () {
    let draggedItem = null;

    document.addEventListener('dragstart', function (e) {
      if (e.target.classList.contains('student-card')) {
        draggedItem = e.target;
        e.target.classList.add('moving');
        e.dataTransfer.setData('text/plain', e.target.dataset.id);
      }
    });

    document.addEventListener('dragend', function (e) {
      if (e.target.classList.contains('student-card')) {
        e.target.classList.remove('moving');
      }
    });

    document.querySelectorAll('.column-body').forEach(column => {
      column.addEventListener('dragover', function (e) {
        e.preventDefault();
      });

      column.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem) {
          this.appendChild(draggedItem);
          draggedItem = null;

          // Update the counters (just visual, not actual data update)
          const presentCount = document.getElementById('present-students').children.length;
          const absentCount = document.getElementById('absent-students').children.length;
          const issuesCount = document.getElementById('issue-students').children.length;

          document.getElementById('present-count').textContent = presentCount;
          document.getElementById('absent-count').textContent = absentCount;
          document.getElementById('issues-count').textContent = issuesCount;

          document.querySelectorAll('.present-count').forEach(el => el.textContent = presentCount);
          document.querySelectorAll('.absent-count').forEach(el => el.textContent = absentCount);
          document.querySelectorAll('.issues-count').forEach(el => el.textContent = issuesCount);
        }
      });
    });
  });
  // This function will handle the click events for mark present/absent buttons
  function setupAttendanceActions() {
    // Delegate event handling to the parent container for better performance
    document.querySelector('.attendance-columns').addEventListener('click', function (e) {
      // Check if clicked element is a mark present button
      if (e.target.closest('.mark-present')) {
        const studentCard = e.target.closest('.student-card');
        if (studentCard) {
          // Move student to present column
          document.getElementById('present-students').appendChild(studentCard);
          updateAttendanceCounts();
        }
      }

      // Check if clicked element is a mark absent button
      if (e.target.closest('.mark-absent')) {
        const studentCard = e.target.closest('.student-card');
        if (studentCard) {
          // Move student to absent column
          document.getElementById('absent-students').appendChild(studentCard);
          updateAttendanceCounts();
        }
      }
    });
  }

  // Function to update all attendance counters
  function updateAttendanceCounts() {
    const presentCount = document.getElementById('present-students').children.length;
    const absentCount = document.getElementById('absent-students').children.length;
    const issuesCount = document.getElementById('issue-students').children.length;

    // Update main counters
    document.getElementById('present-count').textContent = presentCount;
    document.getElementById('absent-count').textContent = absentCount;
    document.getElementById('issues-count').textContent = issuesCount;

    // Update column header counters
    document.querySelectorAll('.present-count').forEach(el => el.textContent = presentCount);
    document.querySelectorAll('.absent-count').forEach(el => el.textContent = absentCount);
    document.querySelectorAll('.issues-count').forEach(el => el.textContent = issuesCount);
  }

  // Modified loadAttendanceData function to keep track of original student placement
  function loadAttendanceData(subjectId) {
    const subject = subjectsData[subjectId];
    if (!subject) return;

    document.getElementById('subject-title').textContent = subject.title + ' Attendance';

    // Update counts
    const presentCount = subject.students.present.length;
    const absentCount = subject.students.absent.length;
    const issuesCount = subject.students.issues.length;

    document.getElementById('present-count').textContent = presentCount;
    document.getElementById('absent-count').textContent = absentCount;
    document.getElementById('issues-count').textContent = issuesCount;

    document.querySelectorAll('.present-count').forEach(el => el.textContent = presentCount);
    document.querySelectorAll('.absent-count').forEach(el => el.textContent = absentCount);
    document.querySelectorAll('.issues-count').forEach(el => el.textContent = issuesCount);

    // Clear existing students
    document.getElementById('present-students').innerHTML = '';
    document.getElementById('absent-students').innerHTML = '';
    document.getElementById('issue-students').innerHTML = '';

    // Add present students
    subject.students.present.forEach(student => {
      const studentEl = createStudentCard(student);
      document.getElementById('present-students').appendChild(studentEl);
    });

    // Add absent students
    subject.students.absent.forEach(student => {
      const studentEl = createStudentCard(student);
      document.getElementById('absent-students').appendChild(studentEl);
    });

    // Add students with issues
    subject.students.issues.forEach(student => {
      const studentEl = createStudentCard(student, true);
      document.getElementById('issue-students').appendChild(studentEl);
    });

    // Setup action buttons after loading attendance data
    setupAttendanceActions();
  }

  // Make student cards draggable
  function createStudentCard(student, hasIssue = false) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.dataset.id = student.id;
    card.draggable = true; // Make it draggable

    const imageDiv = document.createElement('div');
    imageDiv.className = 'student-image';

    const img = document.createElement('img');
    img.src = student.image;
    img.alt = student.name;
    imageDiv.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'student-info';

    const name = document.createElement('h4');
    name.textContent = student.name;

    const roll = document.createElement('p');
    roll.textContent = student.roll;

    infoDiv.appendChild(name);
    infoDiv.appendChild(roll);

    if (hasIssue && student.issue) {
      const issueTag = document.createElement('span');
      issueTag.className = `issue-tag ${student.issue}`;
      issueTag.textContent = student.issue === 'network' ? 'Network Issue' : 'Facial Recognition Issue';
      infoDiv.appendChild(issueTag);
    }

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'student-actions';

    const markPresentBtn = document.createElement('button');
    markPresentBtn.className = 'action-btn mark-present';
    markPresentBtn.innerHTML = '<i class="fas fa-check"></i>';
    markPresentBtn.title = 'Mark Present';

    const markAbsentBtn = document.createElement('button');
    markAbsentBtn.className = 'action-btn mark-absent';
    markAbsentBtn.innerHTML = '<i class="fas fa-times"></i>';
    markAbsentBtn.title = 'Mark Absent';

    actionsDiv.appendChild(markPresentBtn);
    actionsDiv.appendChild(markAbsentBtn);

    card.appendChild(imageDiv);
    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
  }

  // Initialize drag and drop functionality
  function initializeDragAndDrop() {
    let draggedItem = null;

    document.addEventListener('dragstart', function (e) {
      if (e.target.classList.contains('student-card')) {
        draggedItem = e.target;
        e.target.classList.add('moving');
        e.dataTransfer.setData('text/plain', e.target.dataset.id);
      }
    });

    document.addEventListener('dragend', function (e) {
      if (e.target.classList.contains('student-card')) {
        e.target.classList.remove('moving');
      }
    });

    document.querySelectorAll('.column-body').forEach(column => {
      column.addEventListener('dragover', function (e) {
        e.preventDefault();
      });

      column.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem) {
          this.appendChild(draggedItem);
          draggedItem = null;
          updateAttendanceCounts();
        }
      });
    });
  }

  // Call this when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    updateClock();
    initializeDragAndDrop();

    // Set up view attendance buttons
    document.querySelectorAll('.view-attendance').forEach(button => {
      button.addEventListener('click', function () {
        const subjectId = this.closest('.subject-card').dataset.subject;
        loadAttendanceData(subjectId);
        document.getElementById('dashboard-page').classList.remove('active');
        document.getElementById('attendance-page').classList.add('active');
      });
    });

    // Set up back to dashboard button
    document.getElementById('back-to-dashboard').addEventListener('click', function () {
      document.getElementById('dashboard-page').classList.add('active');
      document.getElementById('attendance-page').classList.remove('active');
    });

    // Set up dashboard link
    document.getElementById('dashboard-link').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('dashboard-page').classList.add('active');
      document.getElementById('attendance-page').classList.remove('active');
    });
  });

  // Program-specific student data
  const programStudents = {
    cs: [
      { id: 101, name: 'John Smith', roll: 'CS-2021-101', image: '/api/placeholder/40/40' },
      { id: 102, name: 'Sarah Johnson', roll: 'CS-2021-102', image: '/api/placeholder/40/40' },
      { id: 103, name: 'Michael Brown', roll: 'CS-2021-103', image: '/api/placeholder/40/40' },
      { id: 104, name: 'Emily Davis', roll: 'CS-2021-104', image: '/api/placeholder/40/40' },
      { id: 105, name: 'James Wilson', roll: 'CS-2021-105', image: '/api/placeholder/40/40' }
    ],
    ai: [
      { id: 201, name: 'Robert Lee', roll: 'AI-2021-201', image: '/api/placeholder/40/40' },
      { id: 202, name: 'Linda Chen', roll: 'AI-2021-202', image: '/api/placeholder/40/40' },
      { id: 203, name: 'David Wang', roll: 'AI-2021-203', image: '/api/placeholder/40/40' },
      { id: 204, name: 'Karen Liu', roll: 'AI-2021-204', image: '/api/placeholder/40/40' },
      { id: 205, name: 'Thomas Zhang', roll: 'AI-2021-205', image: '/api/placeholder/40/40' }
    ],
    is: [
      { id: 301, name: 'Patricia Adams', roll: 'IS-2021-301', image: '/api/placeholder/40/40' },
      { id: 302, name: 'George Harris', roll: 'IS-2021-302', image: '/api/placeholder/40/40' },
      { id: 303, name: 'Susan Clark', roll: 'IS-2021-303', image: '/api/placeholder/40/40' },
      { id: 304, name: 'Joseph White', roll: 'IS-2021-304', image: '/api/placeholder/40/40' },
      { id: 305, name: 'Margaret Hall', roll: 'IS-2021-305', image: '/api/placeholder/40/40' }
    ],
    se: [
      { id: 401, name: 'Richard Allen', roll: 'SE-2021-401', image: '/api/placeholder/40/40' },
      { id: 402, name: 'Elizabeth Young', roll: 'SE-2021-402', image: '/api/placeholder/40/40' },
      { id: 403, name: 'Daniel King', roll: 'SE-2021-403', image: '/api/placeholder/40/40' },
      { id: 404, name: 'Lisa Wright', roll: 'SE-2021-404', image: '/api/placeholder/40/40' },
      { id: 405, name: 'Mark Scott', roll: 'SE-2021-405', image: '/api/placeholder/40/40' }
    ]
  };

  // Modal functionality
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('add-subject-modal');
    const addSubjectBtn = document.getElementById('add-subject-btn');
    const closeModal = document.querySelector('.close-modal');
    const cancelSubject = document.getElementById('cancel-subject');
    const saveSubject = document.getElementById('save-subject');

    // Open modal
    addSubjectBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });

    // Close modal on X click
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Close modal on Cancel click
    cancelSubject.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Save subject
    saveSubject.addEventListener('click', function () {
      const subjectName = document.getElementById('subject-name').value;
      const subjectTime = document.getElementById('subject-time').value;
      const subjectDays = document.getElementById('subject-days').value;
      const subjectRoom = document.getElementById('subject-room').value;
      const program = document.getElementById('program-select').value;
      const semester = document.getElementById('semester-select').value;

      // Validate inputs
      if (!subjectName || !subjectTime || !subjectDays || !subjectRoom || !program || !semester) {
        alert('Please fill in all fields');
        return;
      }

      // Create new subject ID
      const subjectId = subjectName.toLowerCase().replace(/\s+/g, '-');

      // Create students object based on selected program
      const students = programStudents[program] || [];

      // Add the new subject to subjectsData
      subjectsData[subjectId] = {
        title: subjectName,
        program: program,
        semester: semester,
        students: {
          present: students.slice(0, 3), // First 3 students are present by default
          absent: [], // No students absent by default
          issues: [] // No issues by default
        }
      };

      // Create and add the new subject card
      const subjectsGrid = document.querySelector('.subjects-grid');
      const newSubjectCard = document.createElement('div');
      newSubjectCard.className = 'subject-card';
      newSubjectCard.dataset.subject = subjectId;

      newSubjectCard.innerHTML = `
    <h2>${subjectName}</h2>
    <div class="subject-info">
      <p><i class="far fa-clock"></i> ${subjectTime}</p>
      <p><i class="far fa-calendar-alt"></i> ${subjectDays}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${subjectRoom}</p>
    </div>
    <div class="attendance-summary">
      <div class="attendance-stat present">
        <p>Present</p>
        <p>${students.slice(0, 3).length}</p>
      </div>
      <div class="attendance-stat absent">
        <p>Absent</p>
        <p>0</p>
      </div>
      <div class="attendance-stat issues">
        <p>Issues</p>
        <p>0</p>
      </div>
    </div>
    <button class="button view-attendance">View Attendance</button>
  `;

      subjectsGrid.appendChild(newSubjectCard);

      // Add event listener to the new view attendance button
      newSubjectCard.querySelector('.view-attendance').addEventListener('click', function () {
        loadAttendanceData(subjectId);
        document.getElementById('dashboard-page').classList.remove('active');
        document.getElementById('attendance-page').classList.add('active');
      });

      // Close the modal and reset form
      modal.style.display = 'none';
      document.getElementById('subject-name').value = '';
      document.getElementById('subject-time').value = '';
      document.getElementById('subject-days').value = '';
      document.getElementById('subject-room').value = '';
      document.getElementById('program-select').selectedIndex = 0;
      document.getElementById('semester-select').selectedIndex = 0;
    });
  });
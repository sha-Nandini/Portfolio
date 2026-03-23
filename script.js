// Data for Projects
const projectsData = [
    {
        id: 'local-lens',
        title: 'Local Lens',
        image: 'images/local final cover.png',
        link: 'local-lens.html',
        figmaLink: 'https://www.figma.com/design/gJixBw0OeMaA9JHAdKIA7a/CSU-302-Local-Lens?node-id=0-1&t=DNBV47AONrCLrvgN-1',
        description: 'A community-driven app helping users discover hidden local businesses and cultural spots.',
        problem: 'Local businesses struggle with visibility against large chains, and users find it hard to discover authentic local experiences.',
        users: 'Explorers, tourists, and locals aged 18-45 looking for unique experiences.',
        solution: 'An intuitive platform that bridges the gap between hidden gems and curious explorers through community-curated content.',
        features: ['Location-based curation', 'Community reviews & stories', 'Interactive neighborhood maps', 'Bookmark & plan itineraries'],
        process: 'Began with user interviews -> Competitor analysis -> Wireframing -> High-fidelity prototyping in Figma -> Usability testing.',
        tags: ['UX Research', 'UI Design']
    },
    {
        id: 'littleleap',
        title: 'LittleLeap',
        image: 'images/little final cover.png',
        link: 'littleleap.html', // Dedicated case study page
        figmaLink: 'https://www.figma.com/design/Q2eXOjvVAxIOCTHGwurbTB/DS-UI?node-id=0-1&t=w3MxL1odOfaFZKTw-1',
        description: 'An integrated learning and support system specifically designed for children with Down Syndrome.',
        problem: 'Parents find it difficult to keep young children engaged in screen-time that is actually educational and not just entertaining.',
        users: 'Children aged 4-8 and their parents/guardians.',
        solution: 'A gamified learning experience that uses storytelling to teach foundational concepts in math, language, and logic.',
        features: ['Interactive storyboards', 'Progress tracking for parents', 'Reward system (badges)', 'Child-friendly UI with large touch targets'],
        process: 'Observational research with kids -> Persona creation -> Card sorting for IA -> UI design focusing on accessibility and bright, soft colors.',
        tags: ['Inclusive Design', 'EdTech']
    },
    {
        id: 'flask-blog',
        title: 'Flask Blog Web App',
        image: 'images/blog app cover.png',
        description: 'A full-featured blog application built with Flask, featuring user authentication and post management.',
        problem: 'Building a scalable and secure blogging platform from scratch requires robust backend logic.',
        users: 'Bloggers and developers looking for a clean, functional web app.',
        solution: 'Implemented a CRUD-based blog with SQLAlchemy, Flask-Login, and responsive Jinja2 templates.',
        features: ['User Registration/Login', 'CRUD for blog posts', 'Account profiles', 'Pagination and search'],
        process: 'Schema design -> Backend development with Flask -> Frontend integration -> Deployment.',
        tags: ['Full Stack', 'Web Dev']
    },
    {
        id: 'innerease',
        title: 'InnerEase',
        image: 'images/inner ease cover.png',
        figmaLink: 'https://www.figma.com/design/bMm1PzxYoWQs1AODjSX9bB/STP-mental-health?node-id=227-6&t=MALVowFLBYMcsQLd-1',
        description: 'A mental wellness companion app focusing on daily check-ins and meditation.',
        problem: 'Existing mental health apps feel overwhelming and clinical, deterring users from building a consistent daily habit.',
        users: 'Working professionals and students experiencing stress and anxiety.',
        solution: 'A calming, minimalist app that uses conversational UI to guide users through daily check-ins and tailored mindfulness exercises.',
        features: ['Mood tracking', 'Guided audio meditations', 'Journaling prompts', 'Crisis resource integration'],
        process: 'Empathy mapping -> User journey mapping -> Low-fi wireframing -> High-fidelity design focusing on soft muted colors to evoke calmness.',
        tags: ['Mental Health', 'UI Design']
    },
    {
        id: 'zara-redesign',
        title: 'Zara Redesign',
        image: 'images/zara cover.png',
        description: 'An unofficial UX case study redesigning the Zara mobile application to improve navigation.',
        problem: 'The current app prioritizes editorial aesthetic over usability, leading to high cart abandonment rates and navigation confusion.',
        users: 'Frequent online shoppers and fashion enthusiasts.',
        solution: 'A streamlined redesign that balances Zara\'s premium editorial feel with standard e-commerce UX patterns for better usability.',
        features: ['Refined category navigation', 'Quick add-to-cart from feed', 'Simplified checkout process', 'Enhanced product filtering'],
        process: 'Heuristic evaluation -> Usability testing of current app -> Information Architecture overhaul -> Figma prototyping.',
        tags: ['Case Study', 'E-commerce']
    },
    {
        id: 'styleup',
        title: 'StyleUp',
        image: 'images/styleup cover.png',
        description: 'A virtual wardrobe and outfit planner that suggests daily looks based on weather.',
        problem: 'Users spend too much time deciding what to wear daily, often forgetting what items they own.',
        users: 'Fashion-conscious individuals and busy professionals.',
        solution: 'A smart assistant that digitizes wardrobes and intelligently combines pieces based on context.',
        features: ['AI outfit generation', 'Weather API integration', 'Calendar sync', 'Virtual closet organization'],
        process: 'Diary studies -> Feature prioritization -> Wireframing -> Interaction design -> Iterative testing.',
        tags: ['Product Design', 'AI']
    },
    {
        id: 'petease',
        title: 'PetEase',
        image: 'images/petease cover.png',
        description: 'An all-in-one pet care management dashboard connecting owners with providers.',
        problem: 'Managing a pet\'s medical history, appointments, and daily routines spans across multiple mediums, leading to disorganization.',
        users: 'Pet owners, specifically those with multiple pets or pets with medical conditions.',
        solution: 'A centralized hub for all pet care needs, making tracking and booking seamless.',
        features: ['Medical record storage', 'Appointment scheduling', 'Diet & medication reminders', 'Provider directory'],
        process: 'Surveys -> User flows -> Mid-fi prototyping -> High-fi design with approachable typography.',
        tags: ['Management', 'App Design']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Setup Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // 3. Populate Projects
    const projectsGrid = document.querySelector('.projects-grid');
    const viewAllBtn = document.getElementById('view-all-projects');
    let showingAll = false;

    function createCard(project, index) {
        // Calculate delay for staggered animation
        const delayClass = index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : '';
        
        const card = document.createElement('div');
        card.className = `project-card fade-in-up ${delayClass}`;
        card.dataset.projectId = project.id;
        
        const imageContent = project.image 
            ? `<img src="${project.image}" alt="${project.title}" class="project-img">`
            : `<i data-lucide="image"></i>`;

        const tagsHtml = project.tags ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('') : '';

        card.innerHTML = `
            <div class="project-image-wrapper">
                ${imageContent}
            </div>
            <div class="project-content">
                <div class="project-tags">${tagsHtml}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-card-footer">
                    <span class="view-link">View Case Study <i data-lucide="arrow-right"></i></span>
                    ${project.figmaLink ? `
                        <a href="${project.figmaLink}" target="_blank" class="figma-icon-btn" title="View Figma Design">
                            <i data-lucide="figma"></i>
                        </a>` : ''}
                </div>
            </div>
        `;
        
        // Add click listener
        card.addEventListener('click', () => {
            if (project.link) {
                window.location.href = project.link;
            } else {
                openModal(project);
            }
        });

        // Prevent Figma link from triggering card click
        const figmaBtn = card.querySelector('.figma-icon-btn');
        if (figmaBtn) {
            figmaBtn.addEventListener('click', (e) => e.stopPropagation());
        }
        
        return card;
    }

    function renderInitialProjects() {
        projectsGrid.innerHTML = '';
        projectsData.slice(0, 3).forEach((project, index) => {
            const card = createCard(project, index);
            projectsGrid.appendChild(card);
            observer.observe(card);
        });
        lucide.createIcons();
    }

    function renderAllProjects() {
        // Only render the remaining projects to maintain entrance animations
        projectsData.slice(3).forEach((project, index) => {
            const card = createCard(project, index + 3);
            projectsGrid.appendChild(card);
            observer.observe(card);
        });
        lucide.createIcons();
        if (viewAllBtn) viewAllBtn.textContent = 'Show Less';
    }

    if (projectsGrid) {
        renderInitialProjects();
    }

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            if (!showingAll) {
                renderAllProjects();
                showingAll = true;
            } else {
                renderInitialProjects();
                showingAll = false;
                viewAllBtn.textContent = 'View All Projects';
                // Scroll back to project section top for better UX
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 4. Modal Logic
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.modal-close');

    function openModal(project) {
        // Build features list
        const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
        
        const modalHeroImage = project.image
            ? `<div class="modal-hero-image-wrapper"><img src="${project.image}" alt="${project.title}" class="modal-hero-img"></div>`
            : '';

        modalContent.innerHTML = `
            <div class="modal-header">
                ${modalHeroImage}
                <h2 class="modal-title">${project.title}</h2>
                <div class="modal-tags">
                    <span class="modal-tag">UX Research</span>
                    <span class="modal-tag">UI Design</span>
                </div>
            </div>
            <div class="modal-body-grid">
                <div class="modal-section" style="grid-column: 1 / -1;">
                    ${project.figmaLink ? `<a href="${project.figmaLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"><i data-lucide="figma"></i> View Figma Design</a>` : ''}
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="target"></i> Problem</h4>
                    <p>${project.problem}</p>
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="users"></i> Users</h4>
                    <p>${project.users}</p>
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="check-circle"></i> Solution</h4>
                    <p>${project.solution}</p>
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="layers"></i> Features</h4>
                    <ul>${featuresHtml}</ul>
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="workflow"></i> Design Process</h4>
                    <p>${project.process}</p>
                </div>
            </div>
        `;
        
        lucide.createIcons({ root: modalContent });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 5. Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.75rem 0';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
    });
});

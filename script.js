// Data for Projects
const projectsData = [
    {
        id: 'local-lens',
        title: 'Local Lens',
        image: 'images/local final cover.png',
        link: 'local-lens.html',
        figmaLink: 'https://www.figma.com/design/gJixBw0OeMaA9JHAdKIA7a/CSU-302-Local-Lens?node-id=0-1&t=DNBV47AONrCLrvgN-1',
        description: 'Helping users discover meaningful local experiences',
        problem: 'Travelers often struggle to find authentic local experiences, relying on generic tourist traps and missing the true soul of a destination.',
        users: 'Curious travelers and explorers who value cultural authenticity over mainstream tourism.',
        solution: 'A bridge between travelers and hidden local gems, providing curated insights and community-driven recommendations.',
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
        description: 'Designing inclusive solutions for children with Down Syndrome',
        problem: 'Children with Down Syndrome often lack digital tools tailored to their unique cognitive and motor needs, leading to frustration and exclusion.',
        users: 'Children aged 4-12 with Down Syndrome, their parents, and special education caregivers.',
        solution: 'An inclusive, accessible learning ecosystem that uses soft visuals and simplified interactions to foster growth and confidence.',
        features: ['Interactive storyboards', 'Progress tracking for parents', 'Reward system (badges)', 'Child-friendly UI with large touch targets'],
        process: 'Observational research with kids -> Persona creation -> Card sorting for IA -> UI design focusing on accessibility and bright, soft colors.',
        tags: ['Inclusive Design', 'EdTech']
    },
    {
        id: 'django-blog',
        title: 'Django Blog Web Application',
        image: 'images/blog app cover.png',
        liveLink: 'https://django-blog-5xxe.onrender.com/',
        githubLink: 'https://github.com/sha-Nandini/Django-blog-app', // Added based on context
        description: 'A full-featured blog application built with Django, featuring user authentication and post management.',
        problem: 'Building a scalable and user-friendly blogging platform that allows users to create, manage, and explore content efficiently while ensuring secure authentication and smooth performance.',
        users: 'Aspiring writers, bloggers, and users who want a simple and clean platform to publish and manage their content.',
        solution: 'Developed a full-stack Django-based blog application with user authentication, CRUD functionality, and dynamic content rendering. The platform ensures secure user interactions and a seamless content management experience.',
        features: ['User Registration & Login Authentication', 'Create, Edit, Delete Blog Posts (CRUD)', 'User-specific content management', 'Dynamic templates and routing', 'Responsive UI for better usability'],
        process: 'Requirement Analysis → Backend Development (Django) → Frontend Integration → Testing → Deployment on Render',
        tags: ['Full-Stack Django Application']
    },
    {
        id: 'innerease',
        title: 'InnerEase',
        image: 'images/inner ease cover.png',
        figmaLink: 'https://www.figma.com/design/bMm1PzxYoWQs1AODjSX9bB/STP-mental-health?node-id=227-6&t=MALVowFLBYMcsQLd-1',
        description: 'Creating accessible mental health support experiences',
        problem: 'Mental wellness apps often feel clinical or overwhelming, making it difficult for users to maintain consistent mindfulness habits during stressful periods.',
        users: 'Students and professionals looking for a simple, non-intimidating way to manage daily stress and anxiety.',
        keyInsights: [
            'Simplicity reduces friction: A minimalist UI lowers the cognitive barrier to entry.',
            'Soft aesthetics promote calm: Muted colors and organic shapes help regulate user emotions.',
            'Consistency is key: Daily check-ins are more likely to happen if the interaction is under 30 seconds.'
        ],
        solution: 'A calming companion that prioritizes ease-of-use and soft aesthetics to lower the barrier for regular mental health check-ins.',
        outcome: 'Increased daily engagement by 25% during the beta testing phase by focusing on reduced cognitive load.',
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
        figmaLink: 'https://www.figma.com/design/placeholder-zara',
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
        figmaLink: 'https://www.figma.com/design/placeholder-styleup',
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
        figmaLink: 'https://www.figma.com/design/placeholder-petease',
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
                    <div class="project-links">
                        ${project.figmaLink ? `
                            <a href="${project.figmaLink}" target="_blank" class="project-icon-btn figma-link" title="View Figma Design">
                                <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
                                    <path d="M0 47.5C0 42.2533 4.2467 38 9.5 38C14.7533 38 19 42.2533 19 47.5C19 52.7467 14.7533 57 9.5 57C4.2467 57 0 52.7467 0 47.5Z" fill="#A259FF"/>
                                    <path d="M0 28.5C0 23.2533 4.2467 19 9.5 19C14.7533 19 19 23.2533 19 28.5V38H9.5C4.2467 38 0 33.7467 0 28.5Z" fill="#1ABCFE"/>
                                    <path d="M0 9.5C0 4.2467 4.2467 0 9.5 0C14.7533 0 19 4.2467 19 9.5V19H9.5C4.2467 19 0 14.7533 0 9.5Z" fill="#FF7262"/>
                                    <path d="M19 9.5C19 4.2467 23.2533 0 28.5 0C33.7467 0 38 4.2467 38 9.5C38 14.7533 33.7467 19 28.5 19H19V9.5Z" fill="#F24E1E"/>
                                </svg>
                            </a>` : ''}
                        ${project.liveLink ? `
                            <a href="${project.liveLink}" target="_blank" class="project-icon-btn live-link" title="Live Demo">
                                <i data-lucide="external-link"></i>
                            </a>` : ''}
                    </div>
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

        // Prevent links from triggering card click
        const iconBtns = card.querySelectorAll('.project-icon-btn');
        iconBtns.forEach(btn => {
            btn.addEventListener('click', (e) => e.stopPropagation());
        });

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

        // Build tags list dynamically
        const tagsHtml = project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');

        const modalHeroImage = project.image
            ? `<div class="modal-hero-image-wrapper"><img src="${project.image}" alt="${project.title}" class="modal-hero-img"></div>`
            : '';

        const actionButtons = `
            <div class="modal-actions" style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                ${project.figmaLink ? `<a href="${project.figmaLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                    <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
                        <path d="M0 47.5C0 42.2533 4.2467 38 9.5 38C14.7533 38 19 42.2533 19 47.5C19 52.7467 14.7533 57 9.5 57C4.2467 57 0 52.7467 0 47.5Z" fill="#A259FF"/>
                        <path d="M0 28.5C0 23.2533 4.2467 19 9.5 19C14.7533 19 19 28.5V38H9.5C4.2467 38 0 33.7467 0 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 9.5C0 4.2467 4.2467 0 9.5 0C14.7533 0 19 4.2467 19 9.5V19H9.5C4.2467 19 0 14.7533 0 9.5Z" fill="#FF7262"/>
                        <path d="M19 9.5C19 4.2467 23.2533 0 28.5 0C33.7467 0 38 4.2467 38 9.5C38 14.7533 33.7467 19 28.5 19H19V9.5Z" fill="#F24E1E"/>
                    </svg>
                    View Figma Design</a>` : ''}
                ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"><i data-lucide="github"></i> GitHub</a>` : ''}
            </div>
        `;

        modalContent.innerHTML = `
            <div class="modal-header">
                ${modalHeroImage}
                <h2 class="modal-title">${project.title}</h2>
                <div class="modal-tags">
                    ${tagsHtml}
                </div>
                ${actionButtons}
            </div>
            <div class="modal-body-grid">
                <div class="modal-section" style="grid-column: 1 / -1; margin-bottom: 0;">
                    <!-- Actions moved to header -->
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="target"></i> Problem</h4>
                    <p>${project.problem}</p>
                </div>
                <div class="modal-section">
                    <h4><i data-lucide="users"></i> Users</h4>
                    <p>${project.users}</p>
                </div>
                ${project.keyInsights ? `
                <div class="modal-section">
                    <h4><i data-lucide="lightbulb"></i> Key Insights</h4>
                    <ul class="modal-list">${project.keyInsights.map(insight => `<li>${insight}</li>`).join('')}</ul>
                </div>` : ''}
                <div class="modal-section">
                    <h4><i data-lucide="check-circle"></i> Solution</h4>
                    <p>${project.solution}</p>
                </div>
                ${project.outcome ? `
                <div class="modal-section" style="grid-column: 1 / -1; border-top: 1px solid var(--clr-border); padding-top: 2rem;">
                    <h4><i data-lucide="award"></i> Outcome</h4>
                    <p>${project.outcome}</p>
                </div>` : ''}
                <div class="modal-section">
                    <h4><i data-lucide="layers"></i> Features</h4>
                    <ul class="modal-list">${featuresHtml}</ul>
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
            header.style.padding = '1.25rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // 6. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Save preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

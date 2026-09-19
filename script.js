// script.js
const vagaForm = document.getElementById('vagaForm');
const modalOverlay = document.getElementById('modalOverlay');
const modalDialog = modalOverlay.querySelector('.modal-dialog');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalBtn = document.getElementById('closeModal');

const mascotFollower = document.getElementById('mascotFollower');
const patrickSvg = mascotFollower.querySelector('.patrick-svg');
const bubblesContainer = document.getElementById('bubblesContainer');

const ICON_CHECK = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const ICON_CROSS = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

// Bolhas Dinâmicas Submarinas
function createBubbles() {
    const bubbleCount = 24;
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 22 + 8;
        const left = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 10;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;

        bubblesContainer.appendChild(bubble);
    }
}
createBubbles();

// Movimento do Patrick Flutuando no Cursor
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animateMascot() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    const deltaX = targetX - currentX;
    const tilt = Math.max(-15, Math.min(15, deltaX * 0.2));

    mascotFollower.style.transform = `translate3d(${currentX - 40}px, ${currentY - 48}px, 0)`;
    patrickSvg.style.transform = `rotate(${tilt}deg)`;

    requestAnimationFrame(animateMascot);
}
animateMascot();

// Validação de Elegibilidade
vagaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const idade = parseInt(document.getElementById('idade').value, 10);
    const altura = parseFloat(document.getElementById('altura').value);

    const eApto = altura >= 1.70 && idade >= 18;

    if (eApto) {
        exibirModal({
            status: 'success',
            titulo: 'Candidato Elegível',
            mensagem: 'Parabéns! Você pode prosseguir no processo para a vaga!',
            icone: ICON_CHECK
        });
    } else {
        exibirModal({
            status: 'error',
            titulo: 'Requisitos Não Preenchidos',
            mensagem: 'Infelizmente você não é apto à vaga',
            icone: ICON_CROSS
        });
    }
});

function exibirModal({ status, titulo, mensagem, icone }) {
    modalDialog.className = `modal-dialog liquid-glass ${status}`;
    modalIcon.innerHTML = icone;
    modalTitle.textContent = titulo;
    modalMessage.textContent = mensagem;
    modalOverlay.classList.remove('hidden');
}

function fecharModal() {
    modalOverlay.classList.add('hidden');
}

closeModalBtn.addEventListener('click', fecharModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) fecharModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        fecharModal();
    }
});
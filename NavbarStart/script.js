const subMenu = document.querySelector('.col_container');
const menuLink = document.querySelector('.link1');
const humburgerMenu = document.querySelector('.navbar_humburger');
const closeMenu = document.querySelector('.close_menu');

function showSubMenu() {
  subMenu.classList.remove('hidden');
  subMenu.classList.add('active');
}

function hideSubMenu() {
  subMenu.classList.add('hidden');
  subMenu.classList.remove('active');
}

menuLink.addEventListener('mouseover', showSubMenu);
menuLink.addEventListener('mouseout', hideSubMenu);
humburgerMenu.addEventListener('click', showSubMenu);
closeMenu.addEventListener('click', hideSubMenu);

        // Esse script adiciona comportamentos de interação em um menu responsivo (hambúrguer) em um site ou aplicação web. Ele define variáveis que
        // representam os elementos HTML do menu, como o contêiner da coluna, o link do menu, o ícone do menu hambúrguer e o botão para fechar o menu.

        // O script adiciona quatro ouvintes de eventos (event listeners) para monitorar as interações do usuário com o menu:
        
        // Quando o usuário passa o mouse sobre o link do menu, o ouvinte 'mouseover' é ativado. Se o contêiner da coluna ainda estiver oculto (possuindo a classe "hidden"),
        // a classe "hidden" é removida e a classe "active" é adicionada para exibir o menu.
        // Quando o usuário move o mouse para fora do link do menu, o ouvinte 'mouseout' é ativado. Se o contêiner da coluna estiver ativo (possuindo a classe "active"),
        // a classe "active" é removida e a classe "hidden" é adicionada para ocultar o menu novamente.
        // Quando o usuário clica no ícone do menu hambúrguer, o ouvinte 'click' é ativado. Se o contêiner da coluna ainda estiver oculto, a classe "hidden" é 
        //removida e a classe "active" é adicionada para exibir o menu.
        // Quando o usuário clica no botão para fechar o menu, o ouvinte 'click' é ativado. Se o contêiner da coluna estiver ativo, a classe "active" é 
        // removida e a classe "hidden" é adicionada para ocultar o menu novamente.
        // Essas ações permitem que o usuário interaja com o menu em dispositivos móveis ou em telas menores, exibindo e ocultando o menu de forma responsiva.
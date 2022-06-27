import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styled from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styled.sidebar}>
      <img
        className={styled.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styled.profile}>
        <Avatar src="https://github.com/hilquiasfmelo.png" />

        <strong>Hilquias Ferreira Melo</strong>
        <span>Backend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styled from './styles.module.css';

export function Comment() {
  return (
    <div className={styled.comment}>
      <Avatar hasBorder={false} src="https://github.com/Tasso-chaves.png" />

      <div className={styled.commentBox}>
        <div className={styled.commentContent}>
          <header>
            <div className={styled.authorAndTime}>
              <strong>Tasso Chaves</strong>
              <time title="08 de Junho às 08:13h" dateTime="22-06-08 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Hilquias sempre fui teu fã man, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styled from './styles.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);

  const publishedAtDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);

    console.log(comments);
  }

  return (
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar hasBorder src={author.avatarUrl} />

          <div className={styled.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styled.content}>
        {content.map((line) => {
          switch (line.type) {
            case 'paragraph':
              return <p>{line.content}</p>;
            case 'link':
              return (
                <p>
                  <a href="#">{line.content}</a>
                </p>
              );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styled.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styled.commentList}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}

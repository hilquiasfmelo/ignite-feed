import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styled from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hilquiasfmelo.png',
      name: 'Hilquias Ferreira',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👏' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento moral realizado pela Rocketseat 💪🧑‍💻',
      },
      { type: 'link', content: 'hilquiasfmelo/nlw-return' },
    ],
    publishedAt: new Date('2022-06-10 09:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styled.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

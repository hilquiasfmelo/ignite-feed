import styled from './styles.module.css';
import IgniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styled.header}>
      <img src={IgniteLogo} alt="Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

import styled from './styles.module.css';

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styled.avatarWithBorder : styled.avatar}
      src={src}
    />
  );
}

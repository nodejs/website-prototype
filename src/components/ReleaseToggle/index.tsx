import React from 'react';

interface Props {
  onToggle: Function;
  selected: boolean;
}

export default function ReleaseToggle({
  onToggle,
  selected,
}: Props): JSX.Element {
  const handleClick = (): void => {
    onToggle(!selected);
  };

  const id = Math.random() * (100000 - 1) + 1;
  return (
    <label htmlFor={`release-selector-${id}`}>
      <input
        id={`release-selector-${id}`}
        type="checkbox"
        checked={selected}
        onChange={handleClick}
      />
      {selected ? 'lts' : 'current'}
    </label>
  );
}

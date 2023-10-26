import React from 'react';

interface NewlineTextProps {
  text: string;
}

export function NewlineText({ text }: NewlineTextProps) {
  const newText = text.split('\n').map((str, index, array) => (
    <React.Fragment key={index}>
      {str}
      {index === array.length - 1 ? null : <br />}
    </React.Fragment>
  ));

  return <>{newText}</>;
}

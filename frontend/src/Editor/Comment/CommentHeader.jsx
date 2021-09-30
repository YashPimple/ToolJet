import React from 'react';

const pluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

const CommentHeader = ({ count = 0, setOpen }) => {
  return (
    <div className="card-header">
      <div className="card-subtitle mt-1">{pluralize(count, 'comment')}</div>
      <span onClick={() => setOpen(false)} className="ms-auto cursor-pointer">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.64628 7.62107L11.6712 12.6474L12.647 11.673L7.62067 6.64669L12.647 1.62176L11.6726 0.645996L6.64628 5.6723L1.62136 0.645996L0.646973 1.62176L5.6719 6.64669L0.646973 11.6716L1.62136 12.6474L6.64628 7.62107Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
};

export default CommentHeader;

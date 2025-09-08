import React, { Fragment } from 'react';
import type { ReactNode } from 'react';
import '@/scss/object/component/_listMovie.scss';
import '@/scss/object/utility/index.scss';

interface IListProps
  extends IListMovieSingleInfo,
    IListMovieMultipleInfo,
    IListMovieCharacterInfo {
  children: ReactNode;
}

interface IListMovieSingleInfo {
  label: string;
  text: string;
  link?: string;
}

export interface IListMovieMultipleInfo {
  label: string;
  lists: {
    text: string;
    link: string;
  }[];
}

export interface IListMovieCharacterInfo {
  characters: TCharacter[];
}

export type TCharacter = {
  name: string;
  actor: string;
  description: string;
};

export const ListsMovie = ({ children }: IListProps) => {
  return <dl>{children}</dl>;
};

export const ListMovieSingleInfo = ({
  label,
  text,
  link,
}: IListMovieSingleInfo) => {
  return (
    <>
      <dt className='u-font-bold u-text-lg'>{label}</dt>
      <dd className='u-pl-4'>{link ? <a href={link}>{text}</a> : text}</dd>
    </>
  );
};

export const ListMovieMultipleInfo = ({
  label,
  lists,
}: IListMovieMultipleInfo) => {
  return (
    <>
      <dt className='u-font-bold u-text-lg'>{label}</dt>
      <dd className='u-pl-4'>
        <ul className='c-listMovie__multiple'>
          {lists.map((list, i) => (
            <li key={i}>
              <a href={list.link}>{list.text}</a>
            </li>
          ))}
        </ul>
      </dd>
    </>
  );
};

export const ListMovieCharacterInfo = ({
  characters,
}: IListMovieCharacterInfo) => {
  return (
    <>
      <dt className='u-font-bold u-text-lg'>登場人物</dt>
      <dd className='u-pl-4'>
        <dl>
          {characters.map((character, i) => {
            return (
              <Fragment key={i}>
                <dt className='u-font-bold'>{character.name}</dt>
                <dd className='u-pl-4'>
                  <p>
                    演:<a href='#'>{character.actor}</a>
                  </p>
                  <p>{character.description}</p>
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </dd>
    </>
  );
};

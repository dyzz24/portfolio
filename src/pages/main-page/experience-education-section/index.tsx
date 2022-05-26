import React, { createRef, useEffect, useMemo, useRef } from 'react';
import './experience-education-section.scss';
import { useUnobserve } from '../../../hooks/use-unobserve';
import { IWithRefChildren } from '../index';

const experienceConfig = [
  {
    companyName: 'ООО ДомКлик, ПАО СБЕР',
    workPeriod: 'Ноябрь 2021 - настоящее время',
    workPosition: 'Senior Frontend Dev',
    workDescription: 'Разработка вэб-приложений',
  },
  {
    companyName: 'ООО Стрим, ПАО МТС',
    workPeriod: 'Февраль 2020 - Ноябрь 2021',
    workPosition: 'Frontend Dev',
    workDescription: 'Разработка вэб-приложений для ПАО МТС',
  },
  {
    companyName: 'АО «Крафтвэй корпорэйшн ПЛС»',
    workPeriod: 'Апрель 2019 - Февраль 2020',
    workPosition: 'Frontend Dev',
    workDescription: `<p>Разработка вэб-приложения с использованием &nbsp;Angular &nbsp;6 &nbsp;версии</p>
                                <p>Написание модулей приложения</p>
                                <p>Оптимизация приложения</p>
                                <p>Создание бизнес логики</p>`,
  },
  {
    companyName: 'ООО Инсат',
    workPeriod: 'Август 2018 - Апрель 2019',
    workPosition: 'Верстальщик / Frontend Dev',
    workDescription: `<p>Верстка и программирование сайтов компании по макетам из Figma&nbsp;и&nbsp;Photoshop.</p>
                        <p>Верстка интерфейса основного продукта компании – MasterScada&nbsp;4</p>
                        <p>Разработка клиентской части глобального проекта компании – CRM системы MasterCase на Angular&nbsp;7, работа в&nbsp;команде с&nbsp;
                            дизайнером и&nbsp;backend программистом
                        </p>`,
  },
  {
    companyName: 'SoftlogicRus',
    workPeriod: 'Май 2018 - август 2018',
    workPosition: 'Верстальщик / Frontend Dev',
    workDescription:
      'Верстка web-приложений компании, написание логики на JS, адаптация под мобильные устройства.',
  },
  {
    companyName: 'Фриланс',
    workPeriod: 'Март 2018 - май 2020',
    workPosition: 'Верстальщик',
    workDescription: 'Разработка сайтов на заказ',
  },
  {
    companyName: 'Нерелевантный опыт работы',
    workPeriod: '2014 - 2018',
    workPosition: '',
    workDescription: '',
  },
  {
    companyName: 'ИГХТУ',
    workPeriod: '2015 - 2018',
    workPosition: 'Студент',
    workDescription: 'Магистратура, Экономика фирмы и отраслевых рынков',
  },
  {
    companyName: 'ИвГПУ',
    workPeriod: '2009 - 2014',
    workPosition: 'Студент',
    workDescription: 'Бакалавриат, Технология текстильных изделий',
  },
];

const createMarkup = (html: string) => {
  return { __html: html };
};

let observer: IntersectionObserver | null = null;
export const ExperienceEducationSection: React.FC<IWithRefChildren> = ({
  refElement,
}) => {
  const refCirclesCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
    () =>
      Array.from({ length: experienceConfig.length }).map(() => createRef()),
    []
  );
  const refLinesCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
    () =>
      Array.from({ length: experienceConfig.length }).map(() => createRef()),
    []
  );
  const refParentsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
    () =>
      Array.from({ length: experienceConfig.length }).map(() => createRef()),
    []
  );

  useUnobserve(refParentsCollection, observer);

  useEffect(() => {
    if (refParentsCollection.length) {
      if (!!window.IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry, idx) => {
              if (entry.isIntersecting) {
                const index = Number(entry.target.getAttribute('data-idx'));
                if (
                  refLinesCollection[index].current &&
                  refCirclesCollection[index].current
                ) {
                  // @ts-ignore
                  refLinesCollection[index].current.className =
                    'experience__line line_anim';
                  // @ts-ignore
                  refCirclesCollection[index].current.className =
                    'experience__circle circle_grow_anim';
                }
              } else {
                const index = Number(entry.target.getAttribute('data-idx'));
                if (
                  refLinesCollection[index].current &&
                  refCirclesCollection[index].current
                ) {
                  // @ts-ignore
                  refLinesCollection[index].current.className =
                    'experience__line';
                  // @ts-ignore
                  refCirclesCollection[index].current.className =
                    'experience__circle';
                }
              }
            });
          },
          { rootMargin: '0px 0px -100px 0px' }
        );
        refParentsCollection.forEach((parentElement) => {
          if (parentElement.current) {
            observer?.observe(parentElement.current);
          }
        });
      }
    }
  }, [refParentsCollection.length]);

  return (
    <section className="experience" ref={refElement}>
      {experienceConfig.map((el, idx) => (
        <div
          key={el.companyName}
          className="experience__row line_anim"
          data-idx={idx}
          ref={refParentsCollection[idx]}
        >
          <div className="experience__name">
            <h2>{el.companyName}</h2>
            <span>{el.workPeriod}</span>
          </div>
          <div className="experience__runner">
            <div
              className="experience__circle"
              ref={refCirclesCollection[idx]}
            ></div>
            <div
              className="experience__line"
              ref={refLinesCollection[idx]}
            ></div>
          </div>
          <div className="experience__more">
            <h3>{el.workPosition}</h3>
            <p dangerouslySetInnerHTML={createMarkup(el.workDescription)}></p>
          </div>
        </div>
      ))}
    </section>
  );
};

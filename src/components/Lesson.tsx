import classNames from 'classnames';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

type AcceptableTypes = 'class' | 'live';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: AcceptableTypes;
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const isActiveLesson = slug === props.slug;
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR },
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-red-700',
          {
            'bg-red-600': isActiveLesson,
          },
        )}
      >
        <header className="flex items-cemter justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                  'text-red-500': !isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
        </header>
        <strong
          className={classNames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}

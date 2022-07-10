import '@vime/core/themes/default.css';

import { DefaultUi, Player, Youtube } from '@vime/react';
import { Spinner } from 'phosphor-react';

import { useGetLessonBySlugQueryQuery } from '../graphql/generated';
import { VideoInformation } from './VideoInformation';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQueryQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex justify-center my-auto">
        <Spinner size={64} className="animate-spin text-red-700" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      {data?.lesson && <VideoInformation lesson={data.lesson} />}
    </div>
  );
}

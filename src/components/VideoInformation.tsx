type LessonType = {
  __typename?: 'Lesson' | undefined;
  description?: string | null | undefined;
  title: string;
  videoId: string;
  teacher?:
    | {
        __typename?: 'Teacher' | undefined;
        avatarURL: string;
        bio: string;
        name: string;
      }
    | null
    | undefined;
};

interface VideoInformationProps {
  lesson: LessonType;
}

export function VideoInformation({ lesson }: VideoInformationProps) {
  return (
    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            {lesson.description}
          </p>

          {lesson.teacher && (
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={lesson.teacher?.avatarURL}
                alt="Professor do curso"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {lesson.teacher?.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {lesson.teacher?.bio}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

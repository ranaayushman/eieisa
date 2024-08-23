import classNames from "classnames";
import { useFeatureStore } from "../store";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={classNames(
        "h-full w-full absolute inset-0 rounded-full bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Name1 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img1.jpg"
      />
    </FeatureCard>
  );
};

export const Name2 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img5.jpg"
      />
    </FeatureCard>
  );
};

export const Name3 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img4.jpg"
      />
    </FeatureCard>
  );
};

export const Name4 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img3.jpg"
      />
    </FeatureCard>
  );
};

export const Name5 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img2.jpg"
      />
    </FeatureCard>
  );
};

export const Name6 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img1.jpg"
      />
    </FeatureCard>
  );
};

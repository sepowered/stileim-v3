import PrismaticBurst from '@semantic/components/PrismaticBurst';

import { BackButton } from './_components/back-button';

const HowDoIWorkPage = () => {
  return (
    <>
      <div className="pt-4">
        <BackButton />
      </div>

      <section className="relative flex flex-col w-full min-h-[500px] tablet:min-h-0 tablet:aspect-[1.8/1] border border-[var(--color-border)] rounded-[0.875rem] overflow-hidden my-8">
        <div className="absolute inset-0 z-0">
          <PrismaticBurst
            intensity={2.2}
            speed={0.2}
            animationType="rotate3d"
            colors={['#FF8080', '#FFBF80', '#FFFF80', '#80FF80', '#8080FF', '#A57FC0', '#C77FFF']}
            mixBlendMode="multiply"
            rayCount={0}
          />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-12 tablet:py-0 tablet:px-16 gap-4 pointer-events-none">
          <span className="text-[1.75rem] max-[425px]:text-xl font-medium text-white font-[family-name:var(--font-instrument-serif)]">
            borderless,limitless.
          </span>
          <h1 className="text-3xl tablet:text-4xl font-bold text-white">
            경계를 넘는 배움과 한계를 넘는 생각으로
            <br className="hidden tablet:block" /> 문제를 끝까지 함께하는
            <br className="hidden tablet:block" /> 기획자 노권후입니다.
          </h1>
          <p className="text-base tablet:text-lg text-white/80 whitespace-pre-wrap leading-relaxed">
            {`프로젝트를 화면 너머의 현실 세계의 맥락에서 바라보고,\n기술과 경험을 연결해 문제를 해결하고자 합니다.`}
          </p>
        </div>
      </section>

      <section className="column gap-16 pb-20">
        <div className="column gap-10">
          <h2 className="text-3xl tablet:text-4xl font-bold text-[var(--color-gray-accent)] leading-tight">
            권후는 어떻게 경계없이,
            <br className="block tablet:hidden" />
            한계없이 일할 수 있는걸까?
          </h2>

          <div className="column gap-12">
            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                경계없는 경험 속에서 연결의 가치를 배워왔습니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                팀 프로젝트와 해커톤 운영 및 공모전 참가 등을 하며{'\n'}
                서로 다른 경험들이 이어질 때 더 나은 결과가 만들어지는 순간을 많이 경험했습니다.
                {'\n'}이 과정에서 다양한 환경을 빠르게 이해하고 적응하는 방법을 배울 수 있었습니다.
              </p>
            </div>

            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                문제를 기능이 아닌 맥락으로 바라보려 합니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                여러 프로젝트를 진행하면서 문제 해결에서{'\n'}
                ‘무엇이 연결되어 있는가’를 먼저 이해하는 것이 중요하다는 것을 배웠습니다.{'\n'}
                그래서 일을 시작할 때 배경과 흐름을 먼저 살피며 문제를 해석하려고 합니다.
              </p>
            </div>

            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                협업 속에서 더 많이 배우고 성장한다고 믿습니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                역할을 나누기보다 팀이 같은 맥락에서 이야기할 수 있는지를 중요하게 생각합니다.{'\n'}
                필요한 부분이 보이면 자연스럽게 돕고, 함께 맞춰가며 일하는 과정 속에서{'\n'}더 좋은
                경험이 만들어짐을 여러 차례 경험할 수 있었습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="column gap-10">
          <h2 className="text-3xl tablet:text-4xl font-bold text-[var(--color-gray-accent)] leading-tight">
            그래서 저는 다음과 같은 방식으로 일하려 합니다.
          </h2>

          <div className="column gap-12">
            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                문서를 넘길 때, 되묻지 않도록 정리합니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                프로젝트를 하면서 문서나 대화를 정리할 때,{'\n'}
                읽는 사람이 되묻지 않도록 흐름을 먼저 맞추는 감각을 중요하게 생각합니다.
              </p>
            </div>

            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                문제 해결에 필요한 부분은 적극적으로 채웁니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                대외활동에서 다른 팀원의 역할을 함께 도와야 하는 경우가 많았습니다.{'\n'}
                필요에 따라 기획·디자인·프론트엔드를 어깨넘어 배우며 진행해왔고,{'\n'}그 과정에서
                여러 도메인의 관점을 이해하며 문제를 맥락 속에서 바라보는 감각을 얻었습니다.
              </p>
            </div>

            <div className="column gap-3">
              <h3 className="text-xl tablet:text-2xl font-bold text-[var(--color-gray-bold)]">
                작은 부분까지 점검하며 마무리합니다.
              </h3>
              <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                일을 마무리할 때는 작은 부분도 다시 확인합니다.{'\n'}
                진행 과정에서 생기는 모호함을 줄이고,{'\n'}
                필요한 보완은 직접 찾아가며 끝까지 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowDoIWorkPage;

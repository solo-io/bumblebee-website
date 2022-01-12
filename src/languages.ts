type SiteContentTexts = {
  GithubButton: string;
  BannerDescription: string;
  BuildTitle: string;
  BuildDescription: string;
  PublishTitle: string;
  PublishDescription: string;
  RunTitle: string;
  RunDescription: string;
  VideoTitle: string;
  VideoDescription: string;
};

type LanguagesContent = {
  [key: string]: SiteContentTexts;
};

export const SiteContentByLanguage: LanguagesContent = {
  EN: {
    GithubButton: `View on Github`,
    BannerDescription: `BumbleBee simplifies building eBPF tools and allows you to
              package, distribute, and run them anywhere. Just focus on the eBPF
              portion of your code and BumbleBee automates away the boilerplate,
              including the userspace code.`,
    BuildTitle: `Build`,
    BuildDescription: `Getting the eBPF tool chain “just right” is hard. BumbleBee
                automates the build process and lets you focus on the code.
                BumbleBee packages your eBPF code as an OCI image so you can
                distribute it across your infrastructure.`,
    PublishTitle: `Publish`,
    PublishDescription: `Leveraging BTF and OCI packaging, the eBPF code you write with
                BumbleBee is portable and can plug into existing publishing
                workflows. Push and pull your eBPF code to any OCI compliant
                registry to publish to other users.`,
    RunTitle: `Run`,
    RunDescription: `With BumbleBee, you focus on your eBPF code and run it anywhere.
                BumbleBee also builds the userspace code and can expose the eBPF
                maps as logs, metrics, and histograms. BumbleBee leverages BTF
                introspection to know what types to display.`,
    VideoTitle: `Get Started`,
    VideoDescription: `Getting started with
            BumbleBee is easy. Take a look at this Quick Start video to simplify
            your eBPF programming experience.`,
  },
  ZH: {
    GithubButton: `查看Github仓库`,
    BannerDescription: `BumbleBee简化了eBPF工具的构建过程，并允许你在任何地方打包、分发和运行它们。
              你只需专注于eBPF代码部分，剩下交给BumbleBee，它可以自动消除样板代码，包括用户空间的代码。`,
    BuildTitle: `构建`,
    BuildDescription: `打造"恰到好处"的eBPF工具链是不易的。
              BumbleBee将构建过程自动化，让你专注于代码本身。
              BumbleBee将你的eBPF代码打包成一个OCI标准镜像，这样就可以在你的基础设施中分发它。`,
    PublishTitle: `发布`,
    PublishDescription: `利用BTF和OCI打包能力，BumbleBee编写的eBPF代码是可移植的，并且可以嵌入到现有的发布工作流程中。
               通过将你的eBPF代码推拉到任何符合OCI标准的镜像仓库，就可以实现发布给其他用户使用。`,
    RunTitle: `运行`,
    RunDescription: `使用BumbleBee，你可以专注于你的eBPF代码，并在任何地方运行它。
               BumbleBee不但构建了用户空间代码，而且可以利用eBPF map，展示日志、指标和柱状图信息。
               BumbleBee也利用BTF格式自审能力，可以知道需要显示哪些数据类型。`,
    VideoTitle: `快速上手`,
    VideoDescription: `上手使用BumbleBee很容易。
              看这个快速入门视频，帮助你提升eBPF编程体验。`,
  },
};

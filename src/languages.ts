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
    GithubButton: `Placeholder`,
    BannerDescription: `Placeholder`,
    BuildTitle: `Placeholder`,
    BuildDescription: `Placeholder`,
    PublishTitle: `Placeholder`,
    PublishDescription: `Placeholder`,
    RunTitle: `Placeholder`,
    RunDescription: `Placeholder`,
    VideoTitle: `Placeholder`,
    VideoDescription: `Placeholder`,
  },
};

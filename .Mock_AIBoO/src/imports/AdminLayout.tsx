import svgPaths from "./svg-0fyx33x3gg";

function Frame1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[58px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-black">AIBoO</p>
    </div>
  );
}

function LogoPlaceholder() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Logo Placeholder">
      <div className="relative shrink-0 size-[24px]" data-name="Symbol">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p15496780} fill="var(--fill-0, #1677FF)" id="Symbol" />
        </svg>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
    </div>
  );
}

function MenuItemLogoPlaceholder() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Menu Item / Logo placeholder">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <LogoPlaceholder />
        </div>
      </div>
    </div>
  );
}

function IconCloudUploadOutlined() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / CloudUploadOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / CloudUploadOutlined">
          <g id="Vector">
            <path d={svgPaths.p35584b70} fill="#1677FF" />
            <path d={svgPaths.p24c11400} fill="#1677FF" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem() {
  return (
    <div className="bg-[#e6f4ff] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconCloudUploadOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1677ff] text-[14px] text-ellipsis whitespace-nowrap">ファイル投入</p>
        </div>
      </div>
    </div>
  );
}

function IconFileSearchOutlined() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / FileSearchOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / FileSearchOutlined">
          <path d={svgPaths.pf902780} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem1() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconFileSearchOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">ファイルをみる</p>
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Items">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[4px] relative w-full">
        <MenuItemInlineNavigationItem />
        <MenuItemInlineNavigationItem1 />
      </div>
    </div>
  );
}

function IconAndroidOutlined() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / AndroidOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / AndroidOutlined">
          <path d={svgPaths.p13a56680} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconRightOutlined() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon / RightOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / RightOutlined">
          <path d={svgPaths.p231fb400} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItemVerticalSubmenuTitle() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[24px] relative rounded-[8px] shrink-0 w-[193px]" data-name="Menu Item / Vertical / Submenu Title">
      <IconAndroidOutlined />
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">AIテンプレート</p>
      <IconRightOutlined />
    </div>
  );
}

function MenuSubmenu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[4px] relative shrink-0" data-name="Menu / Submenu">
      <MenuItemVerticalSubmenuTitle />
    </div>
  );
}

function IconSettingOutlined() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / SettingOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / SettingOutlined">
          <path d={svgPaths.p184df80} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconSettingOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">設定</p>
        </div>
      </div>
    </div>
  );
}

function IconMailOutlined() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / MailOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / MailOutlined">
          <path d={svgPaths.p1196a200} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem3() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconMailOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">お問合せ</p>
        </div>
      </div>
    </div>
  );
}

function MenuItems1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Items">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[4px] relative w-full">
        <MenuItemInlineNavigationItem2 />
        <MenuItemInlineNavigationItem3 />
      </div>
    </div>
  );
}

function AiBoOMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[1024px] items-start pl-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="AIBoOMenu">
      <MenuItemLogoPlaceholder />
      <MenuItems />
      <MenuSubmenu />
      <MenuItems1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d6e7ff] h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1174ff] text-[24px]">ファイルを投入</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[34px] py-[6px] relative rounded-[8px] shrink-0 w-[154px]">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center">ファイルを選択</p>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Upload">
          <path d={svgPaths.p2bdd6100} id="Icon" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function LayoutSection() {
  return <div className="absolute h-[17px] left-[35px] top-[18px] w-[186px]" data-name="Layout / Section" />;
}

function ColumnFile() {
  return (
    <div className="bg-[#f1f1f1] h-[180px] relative rounded-[8px] shrink-0 w-full" data-name="Column / File">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[55px] py-[27px] relative size-full">
          <Frame4 />
          <Upload />
          <LayoutSection />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center w-[228px] whitespace-pre-wrap">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold relative shrink-0 text-[#f90505] text-[20px] w-full">この操作には「見積書」が不足しています</p>
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium relative shrink-0 text-[#eb1a1a] text-[12px] w-full">ファイルを追加してください</p>
    </div>
  );
}

function CardTemplate() {
  return (
    <div className="bg-[#e5e5e5] h-[88px] relative rounded-[8px] shrink-0 w-[480px]" data-name="Card / Template">
      <div className="content-stretch flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[12px] relative rounded-[inherit] size-full text-center">
        <p className="relative shrink-0 text-[14px] text-black">請求書を作成</p>
        <p className="relative shrink-0 text-[#666] text-[14px]">登録済みの情報から請求書を作成します</p>
        <p className="relative shrink-0 text-[#999] text-[11px]">必要なファイル：見積書、取引先情報</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ColumnCenter() {
  return (
    <div className="bg-[#e5e5e5] content-stretch flex flex-col gap-[27px] items-center opacity-40 overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Column / Center">
      <Frame />
      <CardTemplate />
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0 w-[99px]" data-name="Button / Primary">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white">実行する</p>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0 w-[99px]" data-name="追加する">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px] text-center">追加する</p>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[99px]" data-name="Button / Secondary">
      <Component />
    </div>
  );
}

function ColumnAction() {
  return (
    <div className="bg-white h-[180px] relative rounded-[8px] shrink-0 w-full" data-name="Column / Action">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-center justify-center p-[16px] relative size-full">
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </div>
    </div>
  );
}

function LayoutMain() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Layout / Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[60px] py-[47px] relative w-full">
        <ColumnFile />
        <ColumnCenter />
        <ColumnAction />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame2 />
      <LayoutMain />
    </div>
  );
}

export default function AdminLayout() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="AdminLayout">
      <AiBoOMenu />
      <Frame3 />
    </div>
  );
}
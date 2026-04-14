import svgPaths from "./svg-pvzmmrl4mw";

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
            <path d={svgPaths.p35584b70} fill="black" fillOpacity="0.88" />
            <path d={svgPaths.p24c11400} fill="black" fillOpacity="0.88" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconCloudUploadOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">ファイル投入</p>
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
          <path d={svgPaths.pf902780} fill="var(--fill-0, #1677FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItemInlineNavigationItem1() {
  return (
    <div className="bg-[#e6f4ff] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item / Inline / Navigation Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] relative size-full">
          <IconFileSearchOutlined />
          <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1677ff] text-[14px] text-ellipsis whitespace-nowrap">ファイルをみる</p>
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
    <div className="absolute bg-[#d6e7ff] content-stretch flex h-[64px] items-center left-0 px-[16px] top-0 w-[880px]">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#89baff] text-[24px]">ファイルをみる</p>
    </div>
  );
}

function IconFileSearchOutlined1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / FileSearchOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / FileSearchOutlined">
          <path d={svgPaths.p3491480} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[40px] items-center min-h-px min-w-px py-[7px] relative" data-name="Content">
      <IconFileSearchOutlined1 />
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#999] text-[16px] text-ellipsis whitespace-nowrap">ファイル名の一部を入力</p>
    </div>
  );
}

function InputBasic() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[13px] overflow-clip px-[11px] rounded-[8px] shadow-[0px_0px_0px_2px_rgba(5,145,255,0.1)] top-[45px] w-[324px]" data-name="*Input* / Basic">
      <Content />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[375px] p-[10px] top-[10px]">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black">記載内容で探す</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[13px] top-[10px]">
      <InputBasic />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[13px] not-italic text-[16px] text-black top-[21px] w-[147.587px] whitespace-pre-wrap">ファイル名で探す</p>
      <Frame4 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px] whitespace-pre-wrap">日付</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
              <div className="absolute inset-[-6%_-6.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6 14.9333">
                  <path d={svgPaths.p148d2400} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DatePickerField({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[86px] left-0 top-0 w-[370px]"} data-name="Date Picker Field">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[160.87px]" data-name="Date Picker Field">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">タイムスタンプで探す</p>
        <Input />
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-none left-[166px] not-italic text-[16px] text-black top-[42px]">〜</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute left-[92.43px] size-[16px] top-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p3a9103f0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[40px] left-[185px] rounded-[8px] top-[30px] w-[160.87px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-none left-[52.43px] not-italic text-[#b3b3b3] text-[16px] top-[12px]">{`日付   `}</p>
      <Calendar />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[86px] left-[13px] top-[102px] w-[370px]">
      <DatePickerField />
      <Input1 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p3a9103f0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">日付</p>
          <Calendar1 />
        </div>
      </div>
    </div>
  );
}

function DatePickerField1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[383px] top-[102px] w-[162.609px]" data-name="Date Picker Field">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">書類内に記載された日付で探す</p>
      <Input2 />
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p3a9103f0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center left-[570px] min-w-[120px] px-[16px] py-[12px] rounded-[8px] top-[132px] w-[162.609px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">日付</p>
      <Calendar2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[383px] top-[102px]">
      <DatePickerField1 />
      <Input3 />
    </div>
  );
}

function IconIdcardOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / IdcardOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / IdcardOutlined">
          <path d={svgPaths.p35225f80} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[40px] items-center min-h-px min-w-px py-[7px] relative" data-name="Content">
      <IconIdcardOutlined />
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(0,0,0,0.88)] text-ellipsis whitespace-nowrap">入力してください</p>
    </div>
  );
}

function InputBasic1() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_0px_0px_2px_rgba(5,145,255,0.1)] shrink-0 w-full" data-name="*Input* / Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[11px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[372px] p-[10px] top-[35px] w-[344px]">
      <InputBasic1 />
    </div>
  );
}

function ColumnFile() {
  return (
    <div className="bg-[#f1f1f1] h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[760px]" data-name="Column / File">
      <Group />
      <Frame />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.4] left-[13px] not-italic text-[#1e1e1e] text-[16px] top-[194px] w-[160.87px] whitespace-pre-wrap">取引先名で探す</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.4] left-[384px] not-italic text-[#1e1e1e] text-[16px] top-[194px] w-[160.87px] whitespace-pre-wrap">種類で探す</p>
      <Group1 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-none left-[549px] not-italic text-[16px] text-black top-[146px]">〜</p>
      <Frame5 />
    </div>
  );
}

function LayoutMain() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[60px] py-[47px] rounded-[10px] top-[64px] w-[880px]" data-name="Layout / Main">
      <ColumnFile />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#dfdfdf] border-[0.399px] border-solid inset-[96%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#6c757d] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue() {
  return (
    <div className="h-[19.936px] relative shadow-[0px_0.797px_0px_0px_rgba(0,0,0,0.4)] shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue4() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue6() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue7() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue8() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue9() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue10() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue11() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue12() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue13() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue14() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue15() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function CheckboxValue16() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Checkbox_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#dfdfdf] border-[0.399px] border-solid left-[calc(50%+0.44px)] rounded-[0.797px] size-[7.974px] top-[calc(50%+0.03px)]" />
    </div>
  );
}

function TableColumn() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-start shrink-0 w-[23.125px]" data-name="Table Column">
      <Heading />
      <CheckboxValue />
      <CheckboxValue1 />
      <CheckboxValue2 />
      <CheckboxValue3 />
      <CheckboxValue4 />
      <CheckboxValue5 />
      <CheckboxValue6 />
      <CheckboxValue7 />
      <CheckboxValue8 />
      <CheckboxValue9 />
      <CheckboxValue10 />
      <CheckboxValue11 />
      <CheckboxValue12 />
      <CheckboxValue13 />
      <CheckboxValue14 />
      <CheckboxValue15 />
      <CheckboxValue16 />
    </div>
  );
}

function AntDesignCaretDownFilled() {
  return (
    <div className="absolute right-[6.05px] size-[4.785px] top-[9.57px]" data-name="ant-design:caret-down-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14017)" id="ant-design:caret-down-filled">
          <path d={svgPaths.p29413600} fill="var(--fill-0, #EAEAEA)" id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" />
        </g>
        <defs>
          <clipPath id="clip0_1_14017">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AntDesignCaretDownFilled1() {
  return (
    <div className="relative size-[4.785px]" data-name="ant-design:caret-down-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14037)" id="ant-design:caret-down-filled">
          <path d={svgPaths.p451a3c0} fill="var(--fill-0, #343A40)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_14037">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents right-[6.05px] top-[5.58px]">
      <AntDesignCaretDownFilled />
      <div className="absolute flex items-center justify-center right-[6.05px] size-[4.785px] top-[5.58px]">
        <div className="-scale-y-100 flex-none">
          <AntDesignCaretDownFilled1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#dfdfdf] border-[0.399px] border-solid inset-[96%_0_0_0]" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[6.38px] text-[#343a40] text-[5.582px] top-[6.78px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ファイル名
      </p>
      <Group6 />
    </div>
  );
}

function TitleValue() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-[#eaeaea] inset-[0_0_2%_0] opacity-50" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Enter Title...</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Arlene McCoy</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Cody Fisher</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Esther Howard</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue4() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Ronald Richards</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Albert Flores</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue6() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Marvin McKinney</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue7() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Floyd Miles</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue8() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Courtney Henry</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue9() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Guy Hawkins</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue10() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Ralph Edwards</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue11() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Devon Lane</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue12() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Jenny Wilson</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue13() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Bessie Cooper</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue14() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Cameron Williamson</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue15() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Darlene Robertson</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue16() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">Jacob Jones</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Table Column">
      <Heading1 />
      <TitleValue />
      <TitleValue1 />
      <TitleValue2 />
      <TitleValue3 />
      <TitleValue4 />
      <TitleValue5 />
      <TitleValue6 />
      <TitleValue7 />
      <TitleValue8 />
      <TitleValue9 />
      <TitleValue10 />
      <TitleValue11 />
      <TitleValue12 />
      <TitleValue13 />
      <TitleValue14 />
      <TitleValue15 />
      <TitleValue16 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[6.38px] text-[#343a40] text-[5.582px] top-[6.78px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        要約
      </p>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.8px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.797428">
            <line id="Line 15" stroke="var(--stroke-0, #DFDFDF)" strokeWidth="0.797428" x2="121.667" y1="0.398714" y2="0.398714" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">September 9, 2013</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">August 2, 2013</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">September 24, 2017</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">December 29, 2012</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue4() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">May 20, 2015</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">May 31, 2015</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue6() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">February 29, 2012</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue7() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">October 24, 2018</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue8() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">November 7, 2017</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue9() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">May 29, 2017</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue10() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">July 14, 2015</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue11() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">December 19, 2013</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue12() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">December 2, 2018</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue13() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">March 6, 2018</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue14() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">October 30, 2017</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue15() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">February 9, 2015</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateValue16() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Date_value">
      <div className="absolute bg-white inset-0" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">15 Octoober 2021</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Table Column">
      <Heading2 />
      <DateValue />
      <DateValue1 />
      <DateValue2 />
      <DateValue3 />
      <DateValue4 />
      <DateValue5 />
      <DateValue6 />
      <DateValue7 />
      <DateValue8 />
      <DateValue9 />
      <DateValue10 />
      <DateValue11 />
      <DateValue12 />
      <DateValue13 />
      <DateValue14 />
      <DateValue15 />
      <DateValue16 />
    </div>
  );
}

function AntDesignCaretDownFilled2() {
  return (
    <div className="absolute right-[6.05px] size-[4.785px] top-[9.57px]" data-name="ant-design:caret-down-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14017)" id="ant-design:caret-down-filled">
          <path d={svgPaths.p29413600} fill="var(--fill-0, #EAEAEA)" id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" />
        </g>
        <defs>
          <clipPath id="clip0_1_14017">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AntDesignCaretDownFilled3() {
  return (
    <div className="relative size-[4.785px]" data-name="ant-design:caret-down-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14064)" id="ant-design:caret-down-filled">
          <path d={svgPaths.p451a3c0} fill="var(--fill-0, #28A745)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_14064">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents right-[6.05px] top-[5.58px]">
      <AntDesignCaretDownFilled2 />
      <div className="absolute flex items-center justify-center right-[6.05px] size-[4.785px] top-[5.58px]">
        <div className="-scale-y-100 flex-none">
          <AntDesignCaretDownFilled3 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#dfdfdf] border-[0.399px] border-solid inset-[96%_0_0_0]" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[6.38px] text-[#343a40] text-[5.582px] top-[6.78px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        取引先名
      </p>
      <Group7 />
    </div>
  );
}

function TitleValue17() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">704.555.0127</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue18() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">205.555.0100</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue19() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">303.555.0105</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue20() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">229.555.0109</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue21() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">201.555.0124</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue22() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">702.555.0122</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue23() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">671.555.0110</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue24() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">907.555.0101</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue25() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">480.555.0103</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue26() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">302.555.0107</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue27() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">629.555.0129</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue28() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">406.555.0120</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue29() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">239.555.0108</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue30() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">203.555.0106</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue31() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">308.555.0121</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue32() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">225.555.0118</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TitleValue33() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Title_value">
      <div className="absolute bg-white inset-[0_0_2%_0]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[6.38px] not-italic text-[#6c757d] text-[5.582px] top-[10.08px] whitespace-nowrap">
        <p className="leading-[8.772px]">603.555.0123</p>
      </div>
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Table Column">
      <Heading3 />
      <TitleValue17 />
      <TitleValue18 />
      <TitleValue19 />
      <TitleValue20 />
      <TitleValue21 />
      <TitleValue22 />
      <TitleValue23 />
      <TitleValue24 />
      <TitleValue25 />
      <TitleValue26 />
      <TitleValue27 />
      <TitleValue28 />
      <TitleValue29 />
      <TitleValue30 />
      <TitleValue31 />
      <TitleValue32 />
      <TitleValue33 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#dfdfdf] border-[0.399px] border-solid inset-[96%_0_0_0]" />
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[calc(50%-1.37px)] text-[#343a40] text-[5.582px] text-center top-[calc(50%-3.16px)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        種類
      </p>
    </div>
  );
}

function AmountValue() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue1() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$5.22</p>
      </div>
    </div>
  );
}

function AmountValue2() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue3() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue4() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$17.84</p>
      </div>
    </div>
  );
}

function AmountValue5() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$5.22</p>
      </div>
    </div>
  );
}

function AmountValue6() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue7() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$5.22</p>
      </div>
    </div>
  );
}

function AmountValue8() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$14.81</p>
      </div>
    </div>
  );
}

function AmountValue9() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue10() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$11.70</p>
      </div>
    </div>
  );
}

function AmountValue11() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$6.48</p>
      </div>
    </div>
  );
}

function AmountValue12() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$14.81</p>
      </div>
    </div>
  );
}

function AmountValue13() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$8.99</p>
      </div>
    </div>
  );
}

function AmountValue14() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$14.81</p>
      </div>
    </div>
  );
}

function AmountValue15() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$6.48</p>
      </div>
    </div>
  );
}

function AmountValue16() {
  return (
    <div className="bg-white h-[19.936px] relative shrink-0 w-full" data-name="Amount_value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#343a40] text-[5.582px] text-center top-[calc(50%+0.15px)] whitespace-nowrap">
        <p className="leading-[8.772px]">$17.84</p>
      </div>
    </div>
  );
}

function TableColumn4() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start relative row-1 self-start shrink-0 w-[122.006px]" data-name="Table Column">
      <Heading4 />
      <AmountValue />
      <AmountValue1 />
      <AmountValue2 />
      <AmountValue3 />
      <AmountValue4 />
      <AmountValue5 />
      <AmountValue6 />
      <AmountValue7 />
      <AmountValue8 />
      <AmountValue9 />
      <AmountValue10 />
      <AmountValue11 />
      <AmountValue12 />
      <AmountValue13 />
      <AmountValue14 />
      <AmountValue15 />
      <AmountValue16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.8px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.797428">
            <line id="Line 15" stroke="var(--stroke-0, #DFDFDF)" strokeWidth="0.797428" x2="121.667" y1="0.398714" y2="0.398714" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[calc(50%-9px)] text-[#343a40] text-[5.582px] top-[calc(50%-4.35px)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ファイルの日付
      </p>
    </div>
  );
}

function StatusValueDanger() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger />
    </div>
  );
}

function StatusValueDanger1() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger1 />
    </div>
  );
}

function StatusValueDanger2() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger2 />
    </div>
  );
}

function StatusValueDanger3() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger3 />
    </div>
  );
}

function StatusValueDanger4() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue4() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger4 />
    </div>
  );
}

function StatusValueDanger5() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger5 />
    </div>
  );
}

function StatusValueDanger6() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue6() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger6 />
    </div>
  );
}

function StatusValueDanger7() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue7() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger7 />
    </div>
  );
}

function StatusValueDanger8() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue8() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger8 />
    </div>
  );
}

function StatusValueDanger9() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue9() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger9 />
    </div>
  );
}

function StatusValueDanger10() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue10() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger10 />
    </div>
  );
}

function StatusValueDanger11() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue11() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger11 />
    </div>
  );
}

function StatusValueDanger12() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue12() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger12 />
    </div>
  );
}

function StatusValueDanger13() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue13() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger13 />
    </div>
  );
}

function StatusValueDanger14() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue14() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger14 />
    </div>
  );
}

function StatusValueDanger15() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue15() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger15 />
    </div>
  );
}

function StatusValueDanger16() {
  return (
    <div className="absolute bg-[#dc3545] content-stretch flex inset-[22.43%_39.67%_24.43%_38.99%] items-center justify-center px-[3.987px] py-[0.797px] rounded-[9.968px]" data-name="Status Value/Danger">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] relative shrink-0 text-[5.582px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Danger
      </p>
    </div>
  );
}

function StatusValue16() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Status Value">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.667 0.398714">
            <line id="Line 14" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="0.398714" x2="121.667" y1="0.199357" y2="0.199357" />
          </svg>
        </div>
      </div>
      <StatusValueDanger16 />
    </div>
  );
}

function TableColumn5() {
  return (
    <div className="col-6 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Table Column">
      <Group2 />
      <StatusValue />
      <StatusValue1 />
      <StatusValue2 />
      <StatusValue3 />
      <StatusValue4 />
      <StatusValue5 />
      <StatusValue6 />
      <StatusValue7 />
      <StatusValue8 />
      <StatusValue9 />
      <StatusValue10 />
      <StatusValue11 />
      <StatusValue12 />
      <StatusValue13 />
      <StatusValue14 />
      <StatusValue15 />
      <StatusValue16 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Heading">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#eaeaea] border-[#dfdfdf] border-[0.399px] border-solid inset-[96%_0_0_0]" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[8.772px] left-[calc(50%-8.21px)] text-[#343a40] text-[5.582px] top-[calc(50%-3.95px)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        記載された日付
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue1() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component1 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue2() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component2 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue3() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component3 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue4() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component4 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue5() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component5 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue6() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component6 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue7() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component7 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue8() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component8 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue9() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component9 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue10() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component10 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue11() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component11 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue12() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component12 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue13() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component13 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue14() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component14 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue15() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component15 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[7.974px] top-[calc(50%+0.03px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97428 7.97428">
        <g id="Two Tone / Navigation / more_horiz">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p2fdb3800} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="ð¹ Primary Color" />
        </g>
      </svg>
    </div>
  );
}

function ActionValue16() {
  return (
    <div className="h-[19.936px] relative shrink-0 w-full" data-name="Action_value">
      <div className="absolute bg-white inset-0" />
      <Component16 />
      <div className="absolute bg-[#eaeaea] border-[#eaeaea] border-[0.399px] border-solid inset-[98%_0_0_0]" />
    </div>
  );
}

function TableColumn6() {
  return (
    <div className="col-7 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Table Column">
      <Heading5 />
      <ActionValue />
      <ActionValue1 />
      <ActionValue2 />
      <ActionValue3 />
      <ActionValue4 />
      <ActionValue5 />
      <ActionValue6 />
      <ActionValue7 />
      <ActionValue8 />
      <ActionValue9 />
      <ActionValue10 />
      <ActionValue11 />
      <ActionValue12 />
      <ActionValue13 />
      <ActionValue14 />
      <ActionValue15 />
      <ActionValue16 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute grid grid-cols-[_______30px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_20px] h-[358.842px] left-[60px] top-[458px] w-[760px]">
      <TableColumn />
      <TableColumn1 />
      <TableColumn2 />
      <TableColumn3 />
      <TableColumn4 />
      <TableColumn5 />
      <TableColumn6 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="absolute inset-[36.67%_1.39%_36.67%_97.64%]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.37942 6.37942">
        <g id="chevron-right">
          <path d={svgPaths.pd8ee200} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.398714" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-full" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.37942 6.37942">
        <g id="chevron-right">
          <path d={svgPaths.pd8ee200} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.398714" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[23.923px] w-[658.675px]">
          <div className="bg-white size-full" />
        </div>
      </div>
      <div className="absolute bottom-1/4 flex items-center justify-center left-[80.21%] right-[16.71%] top-1/4">
        <div className="-scale-y-100 flex-none h-[11.961px] w-[20.334px]">
          <div className="bg-white border-[#dfdfdf] border-[0.399px] border-solid rounded-[1.595px] size-full" />
        </div>
      </div>
      <div className="absolute bg-[#dfdfdf] border-[#dfdfdf] border-[0.399px] border-solid bottom-1/4 left-[97.22%] right-[0.97%] rounded-[0.797px] top-1/4" />
      <div className="absolute bg-white bottom-1/4 left-[94.79%] right-[3.39%] rounded-[1.595px] top-1/4" />
      <div className="absolute bg-white bottom-1/4 left-[92.37%] right-[5.81%] rounded-[1.595px] top-1/4" />
      <div className="absolute bg-[#dc3545] bottom-1/4 left-[89.95%] right-[8.23%] rounded-[0.797px] top-1/4" />
      <div className="absolute bg-white bottom-1/4 left-[87.53%] right-[10.65%] rounded-[1.595px] top-1/4" />
      <div className="absolute bg-[#dfdfdf] border-[#dfdfdf] border-[0.399px] border-solid bottom-1/4 left-[85.11%] right-[13.08%] rounded-[0.797px] top-1/4" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_11.53%_30.71%_88.17%] justify-center leading-[0] not-italic text-[#6c757d] text-[5.582px] text-center whitespace-nowrap">
        <p className="leading-[8.772px]">1</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_87.34%_30.71%_0.97%] justify-center leading-[0] not-italic text-[#6c757d] text-[5.582px] whitespace-nowrap">
        <p className="leading-[8.772px]">Showing 1 to 10 of 50 entries</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_20%_30.71%_76.82%] justify-center leading-[0] not-italic text-[#6c757d] text-[5.582px] whitespace-nowrap">
        <p className="leading-[8.772px]">Display</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_18.28%_30.71%_80.81%] justify-center leading-[0] not-italic text-[#343a40] text-[5.582px] whitespace-nowrap">
        <p className="leading-[8.772px]">10</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_8.78%_30.71%_90.62%] justify-center leading-[0] not-italic text-[5.582px] text-white whitespace-nowrap">
        <p className="leading-[8.772px]">2</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_6.51%_30.71%_92.89%] justify-center leading-[0] not-italic text-[#6c757d] text-[5.582px] text-center whitespace-nowrap">
        <p className="leading-[8.772px]">3</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[31.67%_4.08%_30.71%_95.31%] justify-center leading-[0] not-italic text-[#6c757d] text-[5.582px] text-center whitespace-nowrap">
        <p className="leading-[8.772px]">4</p>
      </div>
      <ChevronRight />
      <div className="absolute flex inset-[36.67%_13.5%_36.67%_85.53%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[6.379px]">
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function AntDesignCaretRightFilled() {
  return (
    <div className="relative size-full" data-name="ant-design:caret-right-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14014)" id="ant-design:caret-right-filled">
          <path d={svgPaths.p2ee5ee00} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_14014">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AntDesignCaretRightFilled1() {
  return (
    <div className="relative size-full" data-name="ant-design:caret-right-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78457 4.78457">
        <g clipPath="url(#clip0_1_14055)" id="ant-design:caret-right-filled">
          <path d={svgPaths.p8864680} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_14055">
            <rect fill="white" height="4.78457" width="4.78457" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[31.67%_17.07%_33.33%_82.2%]">
      <div className="absolute flex inset-[31.67%_17.07%_48.33%_82.2%] items-center justify-center">
        <div className="-rotate-90 flex-none size-[4.785px]">
          <AntDesignCaretRightFilled />
        </div>
      </div>
      <div className="absolute flex inset-[46.67%_17.07%_33.33%_82.2%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-90 size-[4.785px]">
          <AntDesignCaretRightFilled1 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[31.67%_17.07%_33.33%_82.2%]">
      <Group5 />
    </div>
  );
}

function TabelFooter() {
  return (
    <div className="absolute h-[23.923px] left-[131px] top-[829px] w-[658.675px]" data-name="Tabel_footer">
      <Group3 />
      <Group4 />
      <div className="absolute bg-[#dfdfdf] inset-[0_0_96.67%_0]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] h-[889px] min-h-px min-w-px relative">
      <Frame2 />
      <LayoutMain />
      <Frame6 />
      <TabelFooter />
    </div>
  );
}

export default function Download() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Download00">
      <AiBoOMenu />
      <Frame3 />
    </div>
  );
}
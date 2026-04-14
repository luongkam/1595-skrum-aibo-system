import svgPaths from "./svg-zpor73552u";

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[22px] left-[4.32px] top-px w-[49.352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22px] left-0 not-italic text-[16px] text-black top-[-1px]">AIBoO</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[58px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[24px] left-[33px] top-0 w-[58px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p15496780} fill="var(--fill-0, #1677FF)" id="Symbol" />
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[24px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[20px] w-[91px]" data-name="Container">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[264px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[64px] left-[16px] top-[4px] w-[264px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-[15.62%_6.25%]" data-name="Vector">
      <div className="absolute inset-[44.53%_38.28%_15.62%_38.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.28143 5.57911">
          <path d={svgPaths.p1c6ea00} fill="var(--fill-0, #1677FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.62%_6.25%_25.78%_6.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 8.20311">
          <path d={svgPaths.p3992d400} fill="var(--fill-0, #1677FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconCloudUploadOutlined() {
  return (
    <div className="absolute contents inset-[15.62%_6.25%]" data-name="Icon / CloudUploadOutlined">
      <Vector />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconCloudUploadOutlined />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[14px] top-[13px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[22px] left-[46px] overflow-clip top-[9px] w-[194px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#1677ff] text-[14px] top-[0.5px]">ファイル投入</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[256px]" data-name="Container">
      <Container13 />
      <Paragraph1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#e6f4ff] h-[40px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function IconFileSearchOutlined() {
  return (
    <div className="absolute contents inset-[7.42%_13.28%]" data-name="Icon / FileSearchOutlined">
      <div className="absolute inset-[7.42%_13.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2816 11.9218">
          <path d={svgPaths.p11176980} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconFileSearchOutlined />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[14px] top-[13px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[22px] left-[46px] overflow-clip top-[9px] w-[194px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px]">ファイルをみる</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[256px]" data-name="Container">
      <Container16 />
      <Paragraph2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[16px] pl-[4px] top-[76px] w-[264px]" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function IconAndroidOutlined() {
  return (
    <div className="absolute contents inset-[6.25%_15.66%_6.24%_15.69%]" data-name="Icon / AndroidOutlined">
      <div className="absolute inset-[6.25%_15.66%_6.24%_15.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61137 12.2514">
          <path d={svgPaths.p2edb8b80} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconAndroidOutlined />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[14px] top-[13px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[22px] left-[46px] overflow-clip top-[9px] w-[103px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px]">AIテンプレート</p>
    </div>
  );
}

function IconRightOutlined() {
  return (
    <div className="absolute contents inset-[12.99%_24.02%_12.99%_29.49%]" data-name="Icon / RightOutlined">
      <div className="absolute inset-[12.99%_24.02%_12.99%_29.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57814 8.88308">
          <path d={svgPaths.p3dc37e00} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconRightOutlined />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[157px] size-[12px] top-[14px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[40px] left-0 rounded-[8px] top-[4px] w-[193px]" data-name="Container">
      <Container19 />
      <Paragraph3 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[172px] w-[193px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function IconSettingOutlined() {
  return (
    <div className="absolute contents inset-[6.23%_8.59%_6.28%_8.58%]" data-name="Icon / SettingOutlined">
      <div className="absolute inset-[6.23%_8.59%_6.28%_8.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5965 12.2491">
          <path d={svgPaths.pd5f8400} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconSettingOutlined />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[14px] top-[13px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[22px] left-[46px] overflow-clip top-[9px] w-[194px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px]">設定</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[256px]" data-name="Container">
      <Container24 />
      <Paragraph4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function IconMailOutlined() {
  return (
    <div className="absolute contents inset-[15.63%_6.25%]" data-name="Icon / MailOutlined">
      <div className="absolute inset-[15.63%_6.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 9.625">
          <path d={svgPaths.p2d72ee80} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconMailOutlined />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[14px] top-[13px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22px] left-[46px] overflow-clip top-[9px] w-[194px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px]">お問合せ</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[256px]" data-name="Container">
      <Container27 />
      <Paragraph5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[16px] pl-[4px] top-[228px] w-[264px]" data-name="Container">
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white h-[788px] left-0 top-0 w-[280px]" data-name="Container">
      <Container4 />
      <Container10 />
      <Container17 />
      <Container21 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[14px] w-[166.805px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] left-0 not-italic text-[#89baff] text-[24px] top-[3.5px]">ファイルを投入</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[913px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#d6e7ff] h-[64px] left-0 top-0 w-[913px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[21px] left-[0.35px] top-[4.5px] w-[307.305px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] left-[154px] not-italic text-[#666] text-[14px] text-center top-[2.5px]">ファイルを選択またはここにドラッグ＆ドロップ</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white h-[30px] left-[242.5px] rounded-[8px] top-[20px] w-[308px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Upload() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Upload">
      <div className="absolute inset-[12.5%]" data-name="Icon">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p9001e00} id="Icon" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Upload />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[372.5px] size-[48px] top-[70px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container37() {
  return <div className="absolute h-[17px] left-[35px] top-[18px] w-[186px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="absolute h-[140px] left-0 top-0 w-[793px]" data-name="Container">
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[140px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#f1f1f1] content-stretch flex flex-col h-[140px] items-start left-[60px] rounded-[8px] top-[20px] w-[793px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[180px] left-0 rounded-[10px] top-[64px] w-[913px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[244px] left-[280px] top-0 w-[913px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[788px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container28 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-[rgba(0,0,0,0.88)] top-[0.5px]">投入済みファイル (2)</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p73e0e00} fill="var(--fill-0, #1677FF)" fillOpacity="0.1" id="Vector" />
      </svg>
      <div className="absolute inset-[31.25%_34.38%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 13.5">
            <path d={svgPaths.p22d68b00} id="Vector" stroke="var(--stroke-0, #1677FF)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.75%_43.75%_37.5%_43.75%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 7.5">
            <path d={svgPaths.p2c522e80} id="Vector" stroke="var(--stroke-0, #1677FF)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-0">AIBoO (2).png</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.45)] top-[0.5px]">14.63 KB · 2026/02/13 14:37 · プロジェクトマネージャー業務委託</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <path d={svgPaths.p10263a80} id="Vector" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-px px-[16px] relative size-full">
          <Container41 />
          <Container42 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p73e0e00} fill="var(--fill-0, #1677FF)" fillOpacity="0.1" id="Vector" />
      </svg>
      <div className="absolute inset-[31.25%_34.38%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 13.5">
            <path d={svgPaths.p22d68b00} id="Vector" stroke="var(--stroke-0, #1677FF)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.75%_43.75%_37.5%_43.75%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 7.5">
            <path d={svgPaths.p2c522e80} id="Vector" stroke="var(--stroke-0, #1677FF)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-0">AIBoO (2).png</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.45)] top-[0.5px]">14.63 KB · 2026/02/13 14:39 · Webサイトリニューアル</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <path d={svgPaths.p10263a80} id="Vector" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Container44 />
          <Container45 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white h-[133px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container40 />
          <Container43 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[60px] relative size-full">
        <Heading />
        <Container39 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1193px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Container38 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[788px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ファイル投入">
      <Section />
      <Container />
    </div>
  );
}
const translate = require('google-translate-api-x');

const simplifySentence = (sentence) => {
  return sentence
    .replace(/\bSchemes?\b/gi, 'Plans')
    .replace(/\bFinancial assistance\b/gi, 'Money help')
    .replace(/\bHealth services\b/gi, 'Medical care')
    .replace(/\bEducational support\b/gi, 'School help')
    .replace(/\bEconomically weaker sections\b/gi, 'Poor people')
    .replace(/\bGovernment\b/gi, 'Govt.')
    .replace(/\bBeneficiaries\b/gi, 'People receiving help')
    .replace(/\bYojanas?\b/gi, 'Plans')
    .replace(/\bLegal policies?\b/gi, 'Laws')
    .replace(/\bRTI replies?\b/gi, 'Public information')
    .replace(/\bBills?\b/gi, 'Laws')
    .replace(/\bOfficial announcements?\b/gi, 'Public notices')
    .replace(/\bPublic welfare schemes?\b/gi, 'Government help plans')
    .replace(/\bSubsidies?\b/gi, 'Government help money')
    .replace(/\bGovernance\b/gi, 'Government management')
    .replace(/\bCommittee\b/gi, 'Group')
    .replace(/\bRegulation\b/gi, 'Rule')
    .replace(/\bLegislation\b/gi, 'Laws')
    .replace(/\bTaxes?\b/gi, 'Money collected by government')
    .replace(/\bRevenue\b/gi, 'Government earnings')
    .replace(/\bAdministrative\b/gi, 'Management')
    .replace(/\bConstitutional\b/gi, 'Law-based')
    .replace(/\bPublic hearings?\b/gi, 'Public meetings')
    .replace(/\bAmendments?\b/gi, 'Changes to laws')
    .replace(/\bLegislators?\b/gi, 'Lawmakers')
    .replace(/\bBureaucracy\b/gi, 'Government officials')
    .replace(/\bRegulators?\b/gi, 'Government officials')
    .replace(/\bJudiciary\b/gi, 'Court system')
    .replace(/\bParliament\b/gi, 'Law-making body')
    .replace(/\bMinisters?\b/gi, 'Government leaders')
    .replace(/\bDepartments?\b/gi, 'Government offices')
    .replace(/\bConstitution\b/gi, 'Law document')
    .replace(/\bLegally?\b/gi, 'By law')
    .replace(/\bEnforceable\b/gi, 'Must be followed')
    .replace(/\bStatutory\b/gi, 'Legal')
    .replace(/\bMonetary\b/gi, 'Money-related')
    .replace(/\bLiabilities?\b/gi, 'Debts')
    .replace(/\bAssets?\b/gi, 'Resources')
    .replace(/\bBankruptcy\b/gi, 'Debt inability')
    .replace(/\bAffidavit\b/gi, 'Legal statement')
    .replace(/\bInjunction\b/gi, 'Court order')
    .replace(/\bCompliance\b/gi, 'Following rules')
    .replace(/\bRegulatory\b/gi, 'Rule-based')
    .replace(/\bProvisions?\b/gi, 'Legal rules')
    .replace(/\bCovenant\b/gi, 'Agreement')
    .replace(/\bEstablishment\b/gi, 'Setting up')
    .replace(/\bIncorporation\b/gi, 'Business setup')
    .replace(/\bPartnership\b/gi, 'Business team')
    .replace(/\bIncorporate\b/gi, 'Set up')
    .replace(/\bMediation\b/gi, 'Conflict resolution')
    .replace(/\bDefamation\b/gi, 'Reputation harm')
    .replace(/\bIndemnity\b/gi, 'Legal protection')
    .replace(/\bArbitration\b/gi, 'Dispute resolution')
    .replace(/\bCompensation\b/gi, 'Payback')
    .replace(/\bClass action\b/gi, 'Group lawsuit')
    .replace(/\bNegligence\b/gi, 'Carelessness')
    .replace(/\bLiable\b/gi, 'Responsible')
    .replace(/\bSeverance\b/gi, 'End of contract')
    .replace(/\bInsolvency\b/gi, 'Bankruptcy')
    .replace(/\bExpenditure\b/gi, 'Spending')
    .replace(/\bInvestment\b/gi, 'Money put in')
    .replace(/\bRevenue generation\b/gi, 'Money-making')
    .replace(/\bCommercialization\b/gi, 'Business-making')
    .replace(/\bIntellectual property\b/gi, 'Creative ideas')
    .replace(/\bPatent\b/gi, 'Exclusive rights')
    .replace(/\bTrademark\b/gi, 'Brand name')
    .replace(/\bCopyright\b/gi, 'Creative rights')
    .replace(/\bContractual\b/gi, 'Agreement-based')
    .replace(/\bExclusivity\b/gi, 'Special rights')
    .replace(/\bLawsuit\b/gi, 'Court case')
    .replace(/\bLitigation\b/gi, 'Court fight')
    .replace(/\bCompromise\b/gi, 'Agreement')
    .replace(/\bInsurance\b/gi, 'Protection plan')
    .replace(/\bClaim\b/gi, 'Request for payment')
    .replace(/\bPolicy\b/gi, 'Plan')
    .replace(/\bGuidelines\b/gi, 'Rules')
    .replace(/\bRegulatory body\b/gi, 'Rules enforcer')
    .replace(/\bCompliances?\b/gi, 'Following laws')
    .replace(/\bGoverning body\b/gi, 'Regulating group')
    .replace(/\bPublic interest\b/gi, 'Community good')
    .replace(/\bPublic policy\b/gi, 'Community plan')
    .replace(/\bAudit\b/gi, 'Review')
    .replace(/\bCompliance audit\b/gi, 'Rule-following review')
    .replace(/\bTransparency\b/gi, 'Openness')
    .replace(/\bAccountability\b/gi, 'Responsibility')
    .replace(/\bBureaucratic\b/gi, 'Government official')
    .replace(/\bDeregulation\b/gi, 'Rule removal')
    .replace(/\bPublic service\b/gi, 'Community service')
    .replace(/\bGovernment-funded\b/gi, 'Taxpayer-funded')
    .replace(/\bAdministrative body\b/gi, 'Managing group')
    .replace(/\bOversight\b/gi, 'Supervision')
    .replace(/\bTaxpayer\b/gi, 'People paying taxes')
    .replace(/\bImpeachment\b/gi, 'Removal from office')
    .replace(/\bSovereignty\b/gi, 'Supreme authority')
    .replace(/\bConstitutional right\b/gi, 'Legal right')
    .replace(/\bDue process\b/gi, 'Fair treatment')
    .replace(/\bBailout\b/gi, 'Financial aid')
    .replace(/\bPrivatization\b/gi, 'Private ownership')
    .replace(/\bDevolution\b/gi, 'Power transfer')
    .replace(/\bPublic-private partnership\b/gi, 'Business-government cooperation');
    
};

const formatAsBulletPoints = (text) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const bullets = lines.map(line => `🔹 ${line.trim()}`);
  return bullets.join('\n');
};

const simplifyText = async (text, targetLang = 'en') => {
  const rawLines = text.split('\n').filter(line => line.trim() !== '');
  const simplifiedLines = rawLines.map(simplifySentence);

  let resultText = '';
  let wordCount = 0;
  for (let i = 0; i < simplifiedLines.length; i++) {
    const line = simplifiedLines[i].trim();
    const lineWordCount = line.split(/\s+/).length;

    if (wordCount + lineWordCount > 250) break;
    resultText += line + '\n';
    wordCount += lineWordCount;
  }

  const structured = `
📄 **Simplified Summary**
Here is the document in an easy and clear way:

${formatAsBulletPoints(resultText)}
  `.trim();

  try {
    if (targetLang === 'en') return structured;

    const translated = await translate(structured, { to: targetLang });
    return translated.text;
  } catch (err) {
    console.error('Translation failed:', err);
    return structured + '\n⚠️ (Translation failed)';
  }
};

module.exports = { simplifyText };

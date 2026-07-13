# Bloomberg Final Data Audit

Generated: 2026-05-22

## Current Sample Audit

- Raw tickers in `raw-data.csv`: 503
- Excluded Financials/Utilities tickers: 97
- Non-Financial/Non-Utilities tickers after exclusion: 406
- Long firm-year rows after exclusion: 3654
- Raw data years: 2017-2025

## Data Status

- Final thesis run uses the current `raw-data.csv`; no additional Bloomberg pull is assumed.
- Available metadata: ticker, company name, GICS Sub-Industry, ICB hierarchy, company description, and Bloomberg Industry Group.
- Available annual fundamentals: Revenue, COGS/Gross Margin, Net Income, Total Assets, Total Debt, CFO, Capex, ROE, Total Equity, FCF, Market Cap, Operating Income, Interest Expense, Cash, Current Assets, and Current Liabilities.
- Main BQS uses computed free cash flow margin from CFO minus Capex; raw Bloomberg FCF is retained for audit because some cells have ambiguous suffix formatting.

## Modeling Use

- Main HHI: GICS Sub-Industry x year, using within-sample sales shares.
- Robustness HHI: ICB Subsector, ICB Sector, ICB Supersector, ICB Industry, and Bloomberg Industry Group.
- Robustness outcome: sustained ROE if the constructed panel passes complete-case checks.
- Historical membership is not used; survivorship bias is documented as a sample limitation.

## Highest Priority Missing COGS / Gross Margin Names

- AMT: AMERICAN TOWER C | Telecom Tower REITs | missing COGS years=9/9
- ARE: ALEXANDRIA REAL | Health Care REITs | missing COGS years=9/9
- AVB: AVALONBAY COMMUN | Multi-Family Residential REITs | missing COGS years=9/9
- BXP: BXP INC | Office REITs | missing COGS years=9/9
- CCI: CROWN CASTLE INC | Telecom Tower REITs | missing COGS years=9/9
- CPAY: CORPAY INC | Transaction & Payment Processing Services | missing COGS years=9/9
- CPT: CAMDEN PROP TR | Multi-Family Residential REITs | missing COGS years=9/9
- CSX: CSX CORP | Rail Transportation | missing COGS years=9/9
- DAL: DELTA AIR LI | Passenger Airlines | missing COGS years=9/9
- DLR: DIGITAL REALTY | Data Center REITs | missing COGS years=9/9
- DOC: HEALTHPEAK PROPE | Health Care REITs | missing COGS years=9/9
- EQR: EQUITY RESIDENTI | Multi-Family Residential REITs | missing COGS years=9/9
- ESS: ESSEX PROPERTY | Multi-Family Residential REITs | missing COGS years=9/9
- EXR: EXTRA SPACE STOR | Self-Storage REITs | missing COGS years=9/9
- FOX: FOX CORP - B | Broadcasting | missing COGS years=9/9
- FOXA: FOX CORP - A | Broadcasting | missing COGS years=9/9
- FRT: FED REALTY INVS | Retail REITs | missing COGS years=9/9
- HCA: HCA HEALTHCARE I | Health Care Facilities | missing COGS years=9/9
- HST: HOST HOTELS & RE | Hotel & Resort REITs | missing COGS years=9/9
- INVH: INVITATION HOMES | Single-Family Residential REITs | missing COGS years=9/9
- KIM: KIMCO REALTY | Retail REITs | missing COGS years=9/9
- LUV: SOUTHWEST AIR | Passenger Airlines | missing COGS years=9/9
- MA: MASTERCARD INC-A | Transaction & Payment Processing Services | missing COGS years=9/9
- MAA: MID-AMERICA APAR | Multi-Family Residential REITs | missing COGS years=9/9
- NSC: NORFOLK SOUTHERN | Rail Transportation | missing COGS years=9/9
- O: REALTY INCOME | Retail REITs | missing COGS years=9/9
- OMC: OMNICOM GROUP | Advertising | missing COGS years=9/9
- PLD: PROLOGIS INC | Industrial REITs | missing COGS years=9/9
- PSA: PUBLIC STORAGE | Self-Storage REITs | missing COGS years=9/9
- REG: REGENCY CENTERS | Retail REITs | missing COGS years=9/9
- SPG: SIMON PROPERTY | Retail REITs | missing COGS years=9/9
- TPL: TEXAS PACIFIC LA | Oil & Gas Exploration & Production | missing COGS years=9/9
- TTD: TRADE DESK INC-A | Advertising | missing COGS years=9/9
- UAL: UNITED AIRLINES | Passenger Airlines | missing COGS years=9/9
- UDR: UDR INC | Multi-Family Residential REITs | missing COGS years=9/9
- UHS: UNIVERSAL HLTH-B | Health Care Facilities | missing COGS years=9/9
- UNP: UNION PAC CORP | Rail Transportation | missing COGS years=9/9
- V: VISA INC-CLASS A | Transaction & Payment Processing Services | missing COGS years=9/9
- VICI: VICI PROPERTIES | Other Specialized REITs | missing COGS years=9/9
- VTR: VENTAS INC | Health Care REITs | missing COGS years=9/9
- WELL: WELLTOWER INC | Health Care REITs | missing COGS years=9/9
- BKNG: BOOKING HOLDINGS | Hotels, Resorts & Cruise Lines | missing COGS years=8/9
- Q: QNITY ELECTRONIC | Semiconductor Materials & Equipment | missing COGS years=7/9
- SNDK: SANDISK CORP | Technology Hardware, Storage & Peripherals | missing COGS years=5/9
- GEV: GE VERNOVA INC | Heavy Electrical Equipment | missing COGS years=4/9
- PSKY: PARAMOUNT SKYDAN | Broadcasting | missing COGS years=4/9
- SOLV: SOLVENTUM | Health Care Supplies | missing COGS years=4/9
- MRNA: MODERNA INC | Biotechnology | missing COGS years=3/9
- VLTO: VERALTO CORP | Environmental & Facilities Services | missing COGS years=3/9
- GEHC: GE HEALTHCARE TE | Health Care Equipment | missing COGS years=2/9
- KVUE: KENVUE INC | Personal Care Products | missing COGS years=2/9
- SW: SMURFIT WESTROCK | Paper & Plastic Packaging Products & Materials | missing COGS years=2/9
- VRT: VERTIV HOLDING-A | Electrical Components & Equipment | missing COGS years=2/9
- APP: APPLOVIN CO-CL A | Application Software | missing COGS years=1/9
- DASH: DOORDASH INC-A | Restaurants | missing COGS years=1/9
- PLTR: PALANTIR TECHN-A | Application Software | missing COGS years=1/9

## Remaining External Limitation

- The dataset does not include historical S&P 500 membership. This is a limitation for external validity, not a blocker for the final thesis framing.

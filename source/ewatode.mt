(
	export EWATode
	
	EWATode :: (
		Magic
		MinorVersion
		MajorVersion
		CompileTag
		Metadata
		CodeIndex
		Code
	) >> ({output}) => output.match(/.{2}/g).join(" ")
	
	Magic :: HexNums ++ >> "02 03 07 41"
	MinorVersion :: HexNums ++ >> "00 01"
	MajorVersion :: HexNums ++ >> "00 00"
	CompileTag :: HexNums ++ >> "53 41 4e 44 50 4f 4e 44"
	
	HexNums ++ Strip :: HexNum+
	HexNum :: HexNumDigit HexNumDigit
	HexNumDigit :: /[0-9A-Fa-f]/
	
	Strip :: {<
		:: " " >> ""
		/[^]/
	>}
	
	Metadata :: HexNums ++ >> "00"
	CodeIndex :: HexNums ++ >> "00 00"
	Code :: HexNums ++ >> "00 00"
	
)
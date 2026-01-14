
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BinhLuan
 * 
 */
export type BinhLuan = $Result.DefaultSelection<Prisma.$BinhLuanPayload>
/**
 * Model DatPhong
 * 
 */
export type DatPhong = $Result.DefaultSelection<Prisma.$DatPhongPayload>
/**
 * Model Genders
 * 
 */
export type Genders = $Result.DefaultSelection<Prisma.$GendersPayload>
/**
 * Model NguoiDung
 * 
 */
export type NguoiDung = $Result.DefaultSelection<Prisma.$NguoiDungPayload>
/**
 * Model Permissions
 * 
 */
export type Permissions = $Result.DefaultSelection<Prisma.$PermissionsPayload>
/**
 * Model Phong
 * 
 */
export type Phong = $Result.DefaultSelection<Prisma.$PhongPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model ViTri
 * 
 */
export type ViTri = $Result.DefaultSelection<Prisma.$ViTriPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BinhLuans
 * const binhLuans = await prisma.binhLuan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BinhLuans
   * const binhLuans = await prisma.binhLuan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.binhLuan`: Exposes CRUD operations for the **BinhLuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinhLuans
    * const binhLuans = await prisma.binhLuan.findMany()
    * ```
    */
  get binhLuan(): Prisma.BinhLuanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datPhong`: Exposes CRUD operations for the **DatPhong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatPhongs
    * const datPhongs = await prisma.datPhong.findMany()
    * ```
    */
  get datPhong(): Prisma.DatPhongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genders`: Exposes CRUD operations for the **Genders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.genders.findMany()
    * ```
    */
  get genders(): Prisma.GendersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nguoiDung`: Exposes CRUD operations for the **NguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NguoiDungs
    * const nguoiDungs = await prisma.nguoiDung.findMany()
    * ```
    */
  get nguoiDung(): Prisma.NguoiDungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **Permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.PermissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phong`: Exposes CRUD operations for the **Phong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phongs
    * const phongs = await prisma.phong.findMany()
    * ```
    */
  get phong(): Prisma.PhongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viTri`: Exposes CRUD operations for the **ViTri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViTris
    * const viTris = await prisma.viTri.findMany()
    * ```
    */
  get viTri(): Prisma.ViTriDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BinhLuan: 'BinhLuan',
    DatPhong: 'DatPhong',
    Genders: 'Genders',
    NguoiDung: 'NguoiDung',
    Permissions: 'Permissions',
    Phong: 'Phong',
    RolePermission: 'RolePermission',
    Roles: 'Roles',
    ViTri: 'ViTri'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "binhLuan" | "datPhong" | "genders" | "nguoiDung" | "permissions" | "phong" | "rolePermission" | "roles" | "viTri"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BinhLuan: {
        payload: Prisma.$BinhLuanPayload<ExtArgs>
        fields: Prisma.BinhLuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinhLuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinhLuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          findFirst: {
            args: Prisma.BinhLuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinhLuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          findMany: {
            args: Prisma.BinhLuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>[]
          }
          create: {
            args: Prisma.BinhLuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          createMany: {
            args: Prisma.BinhLuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BinhLuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          update: {
            args: Prisma.BinhLuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          deleteMany: {
            args: Prisma.BinhLuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BinhLuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BinhLuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          aggregate: {
            args: Prisma.BinhLuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBinhLuan>
          }
          groupBy: {
            args: Prisma.BinhLuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<BinhLuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinhLuanCountArgs<ExtArgs>
            result: $Utils.Optional<BinhLuanCountAggregateOutputType> | number
          }
        }
      }
      DatPhong: {
        payload: Prisma.$DatPhongPayload<ExtArgs>
        fields: Prisma.DatPhongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatPhongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatPhongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          findFirst: {
            args: Prisma.DatPhongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatPhongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          findMany: {
            args: Prisma.DatPhongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>[]
          }
          create: {
            args: Prisma.DatPhongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          createMany: {
            args: Prisma.DatPhongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DatPhongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          update: {
            args: Prisma.DatPhongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          deleteMany: {
            args: Prisma.DatPhongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatPhongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DatPhongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          aggregate: {
            args: Prisma.DatPhongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatPhong>
          }
          groupBy: {
            args: Prisma.DatPhongGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatPhongGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatPhongCountArgs<ExtArgs>
            result: $Utils.Optional<DatPhongCountAggregateOutputType> | number
          }
        }
      }
      Genders: {
        payload: Prisma.$GendersPayload<ExtArgs>
        fields: Prisma.GendersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GendersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GendersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          findFirst: {
            args: Prisma.GendersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GendersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          findMany: {
            args: Prisma.GendersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>[]
          }
          create: {
            args: Prisma.GendersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          createMany: {
            args: Prisma.GendersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GendersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          update: {
            args: Prisma.GendersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          deleteMany: {
            args: Prisma.GendersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GendersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GendersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          aggregate: {
            args: Prisma.GendersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenders>
          }
          groupBy: {
            args: Prisma.GendersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GendersGroupByOutputType>[]
          }
          count: {
            args: Prisma.GendersCountArgs<ExtArgs>
            result: $Utils.Optional<GendersCountAggregateOutputType> | number
          }
        }
      }
      NguoiDung: {
        payload: Prisma.$NguoiDungPayload<ExtArgs>
        fields: Prisma.NguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NguoiDungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NguoiDungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findFirst: {
            args: Prisma.NguoiDungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NguoiDungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findMany: {
            args: Prisma.NguoiDungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>[]
          }
          create: {
            args: Prisma.NguoiDungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          createMany: {
            args: Prisma.NguoiDungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NguoiDungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          update: {
            args: Prisma.NguoiDungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.NguoiDungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NguoiDungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NguoiDungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          aggregate: {
            args: Prisma.NguoiDungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoiDung>
          }
          groupBy: {
            args: Prisma.NguoiDungGroupByArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NguoiDungCountArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungCountAggregateOutputType> | number
          }
        }
      }
      Permissions: {
        payload: Prisma.$PermissionsPayload<ExtArgs>
        fields: Prisma.PermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findFirst: {
            args: Prisma.PermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findMany: {
            args: Prisma.PermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>[]
          }
          create: {
            args: Prisma.PermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          createMany: {
            args: Prisma.PermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          update: {
            args: Prisma.PermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          deleteMany: {
            args: Prisma.PermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.PermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      Phong: {
        payload: Prisma.$PhongPayload<ExtArgs>
        fields: Prisma.PhongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          findFirst: {
            args: Prisma.PhongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          findMany: {
            args: Prisma.PhongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>[]
          }
          create: {
            args: Prisma.PhongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          createMany: {
            args: Prisma.PhongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          update: {
            args: Prisma.PhongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          deleteMany: {
            args: Prisma.PhongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          aggregate: {
            args: Prisma.PhongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhong>
          }
          groupBy: {
            args: Prisma.PhongGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhongGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhongCountArgs<ExtArgs>
            result: $Utils.Optional<PhongCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      ViTri: {
        payload: Prisma.$ViTriPayload<ExtArgs>
        fields: Prisma.ViTriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViTriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViTriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          findFirst: {
            args: Prisma.ViTriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViTriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          findMany: {
            args: Prisma.ViTriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>[]
          }
          create: {
            args: Prisma.ViTriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          createMany: {
            args: Prisma.ViTriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViTriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          update: {
            args: Prisma.ViTriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          deleteMany: {
            args: Prisma.ViTriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViTriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViTriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          aggregate: {
            args: Prisma.ViTriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViTri>
          }
          groupBy: {
            args: Prisma.ViTriGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViTriGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViTriCountArgs<ExtArgs>
            result: $Utils.Optional<ViTriCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    binhLuan?: BinhLuanOmit
    datPhong?: DatPhongOmit
    genders?: GendersOmit
    nguoiDung?: NguoiDungOmit
    permissions?: PermissionsOmit
    phong?: PhongOmit
    rolePermission?: RolePermissionOmit
    roles?: RolesOmit
    viTri?: ViTriOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GendersCountOutputType
   */

  export type GendersCountOutputType = {
    NguoiDung: number
  }

  export type GendersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | GendersCountOutputTypeCountNguoiDungArgs
  }

  // Custom InputTypes
  /**
   * GendersCountOutputType without action
   */
  export type GendersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersCountOutputType
     */
    select?: GendersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GendersCountOutputType without action
   */
  export type GendersCountOutputTypeCountNguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
  }


  /**
   * Count Type NguoiDungCountOutputType
   */

  export type NguoiDungCountOutputType = {
    BinhLuan: number
    DatPhong: number
  }

  export type NguoiDungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | NguoiDungCountOutputTypeCountBinhLuanArgs
    DatPhong?: boolean | NguoiDungCountOutputTypeCountDatPhongArgs
  }

  // Custom InputTypes
  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDungCountOutputType
     */
    select?: NguoiDungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountBinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountDatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
  }


  /**
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    RolePermission: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | PermissionsCountOutputTypeCountRolePermissionArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type PhongCountOutputType
   */

  export type PhongCountOutputType = {
    BinhLuan: number
    DatPhong: number
  }

  export type PhongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | PhongCountOutputTypeCountBinhLuanArgs
    DatPhong?: boolean | PhongCountOutputTypeCountDatPhongArgs
  }

  // Custom InputTypes
  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhongCountOutputType
     */
    select?: PhongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeCountBinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
  }

  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeCountDatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    NguoiDung: number
    RolePermission: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | RolesCountOutputTypeCountNguoiDungArgs
    RolePermission?: boolean | RolesCountOutputTypeCountRolePermissionArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountNguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type ViTriCountOutputType
   */

  export type ViTriCountOutputType = {
    Phong: number
  }

  export type ViTriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phong?: boolean | ViTriCountOutputTypeCountPhongArgs
  }

  // Custom InputTypes
  /**
   * ViTriCountOutputType without action
   */
  export type ViTriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTriCountOutputType
     */
    select?: ViTriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViTriCountOutputType without action
   */
  export type ViTriCountOutputTypeCountPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhongWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BinhLuan
   */

  export type AggregateBinhLuan = {
    _count: BinhLuanCountAggregateOutputType | null
    _avg: BinhLuanAvgAggregateOutputType | null
    _sum: BinhLuanSumAggregateOutputType | null
    _min: BinhLuanMinAggregateOutputType | null
    _max: BinhLuanMaxAggregateOutputType | null
  }

  export type BinhLuanAvgAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    sao_binh_luan: number | null
    deletedBy: number | null
  }

  export type BinhLuanSumAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    sao_binh_luan: number | null
    deletedBy: number | null
  }

  export type BinhLuanMinAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
    sao_binh_luan: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinhLuanMaxAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
    sao_binh_luan: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinhLuanCountAggregateOutputType = {
    id: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan: number
    noi_dung: number
    sao_binh_luan: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BinhLuanAvgAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    sao_binh_luan?: true
    deletedBy?: true
  }

  export type BinhLuanSumAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    sao_binh_luan?: true
    deletedBy?: true
  }

  export type BinhLuanMinAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinhLuanMaxAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinhLuanCountAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BinhLuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinhLuan to aggregate.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinhLuans
    **/
    _count?: true | BinhLuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinhLuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinhLuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinhLuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinhLuanMaxAggregateInputType
  }

  export type GetBinhLuanAggregateType<T extends BinhLuanAggregateArgs> = {
        [P in keyof T & keyof AggregateBinhLuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinhLuan[P]>
      : GetScalarType<T[P], AggregateBinhLuan[P]>
  }




  export type BinhLuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithAggregationInput | BinhLuanOrderByWithAggregationInput[]
    by: BinhLuanScalarFieldEnum[] | BinhLuanScalarFieldEnum
    having?: BinhLuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinhLuanCountAggregateInputType | true
    _avg?: BinhLuanAvgAggregateInputType
    _sum?: BinhLuanSumAggregateInputType
    _min?: BinhLuanMinAggregateInputType
    _max?: BinhLuanMaxAggregateInputType
  }

  export type BinhLuanGroupByOutputType = {
    id: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan: Date
    noi_dung: string
    sao_binh_luan: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BinhLuanCountAggregateOutputType | null
    _avg: BinhLuanAvgAggregateOutputType | null
    _sum: BinhLuanSumAggregateOutputType | null
    _min: BinhLuanMinAggregateOutputType | null
    _max: BinhLuanMaxAggregateOutputType | null
  }

  type GetBinhLuanGroupByPayload<T extends BinhLuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinhLuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinhLuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinhLuanGroupByOutputType[P]>
            : GetScalarType<T[P], BinhLuanGroupByOutputType[P]>
        }
      >
    >


  export type BinhLuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ma_phong?: boolean
    ma_nguoi_binh_luan?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
    sao_binh_luan?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["binhLuan"]>



  export type BinhLuanSelectScalar = {
    id?: boolean
    ma_phong?: boolean
    ma_nguoi_binh_luan?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
    sao_binh_luan?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BinhLuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ma_phong" | "ma_nguoi_binh_luan" | "ngay_binh_luan" | "noi_dung" | "sao_binh_luan" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["binhLuan"]>
  export type BinhLuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }

  export type $BinhLuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BinhLuan"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      Phong: Prisma.$PhongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ma_phong: number
      ma_nguoi_binh_luan: number
      ngay_binh_luan: Date
      noi_dung: string
      sao_binh_luan: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["binhLuan"]>
    composites: {}
  }

  type BinhLuanGetPayload<S extends boolean | null | undefined | BinhLuanDefaultArgs> = $Result.GetResult<Prisma.$BinhLuanPayload, S>

  type BinhLuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BinhLuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BinhLuanCountAggregateInputType | true
    }

  export interface BinhLuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BinhLuan'], meta: { name: 'BinhLuan' } }
    /**
     * Find zero or one BinhLuan that matches the filter.
     * @param {BinhLuanFindUniqueArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BinhLuanFindUniqueArgs>(args: SelectSubset<T, BinhLuanFindUniqueArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BinhLuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BinhLuanFindUniqueOrThrowArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BinhLuanFindUniqueOrThrowArgs>(args: SelectSubset<T, BinhLuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BinhLuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindFirstArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BinhLuanFindFirstArgs>(args?: SelectSubset<T, BinhLuanFindFirstArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BinhLuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindFirstOrThrowArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BinhLuanFindFirstOrThrowArgs>(args?: SelectSubset<T, BinhLuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BinhLuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinhLuans
     * const binhLuans = await prisma.binhLuan.findMany()
     * 
     * // Get first 10 BinhLuans
     * const binhLuans = await prisma.binhLuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binhLuanWithIdOnly = await prisma.binhLuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BinhLuanFindManyArgs>(args?: SelectSubset<T, BinhLuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BinhLuan.
     * @param {BinhLuanCreateArgs} args - Arguments to create a BinhLuan.
     * @example
     * // Create one BinhLuan
     * const BinhLuan = await prisma.binhLuan.create({
     *   data: {
     *     // ... data to create a BinhLuan
     *   }
     * })
     * 
     */
    create<T extends BinhLuanCreateArgs>(args: SelectSubset<T, BinhLuanCreateArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BinhLuans.
     * @param {BinhLuanCreateManyArgs} args - Arguments to create many BinhLuans.
     * @example
     * // Create many BinhLuans
     * const binhLuan = await prisma.binhLuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BinhLuanCreateManyArgs>(args?: SelectSubset<T, BinhLuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinhLuan.
     * @param {BinhLuanDeleteArgs} args - Arguments to delete one BinhLuan.
     * @example
     * // Delete one BinhLuan
     * const BinhLuan = await prisma.binhLuan.delete({
     *   where: {
     *     // ... filter to delete one BinhLuan
     *   }
     * })
     * 
     */
    delete<T extends BinhLuanDeleteArgs>(args: SelectSubset<T, BinhLuanDeleteArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BinhLuan.
     * @param {BinhLuanUpdateArgs} args - Arguments to update one BinhLuan.
     * @example
     * // Update one BinhLuan
     * const binhLuan = await prisma.binhLuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BinhLuanUpdateArgs>(args: SelectSubset<T, BinhLuanUpdateArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BinhLuans.
     * @param {BinhLuanDeleteManyArgs} args - Arguments to filter BinhLuans to delete.
     * @example
     * // Delete a few BinhLuans
     * const { count } = await prisma.binhLuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BinhLuanDeleteManyArgs>(args?: SelectSubset<T, BinhLuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinhLuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinhLuans
     * const binhLuan = await prisma.binhLuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BinhLuanUpdateManyArgs>(args: SelectSubset<T, BinhLuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinhLuan.
     * @param {BinhLuanUpsertArgs} args - Arguments to update or create a BinhLuan.
     * @example
     * // Update or create a BinhLuan
     * const binhLuan = await prisma.binhLuan.upsert({
     *   create: {
     *     // ... data to create a BinhLuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinhLuan we want to update
     *   }
     * })
     */
    upsert<T extends BinhLuanUpsertArgs>(args: SelectSubset<T, BinhLuanUpsertArgs<ExtArgs>>): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BinhLuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanCountArgs} args - Arguments to filter BinhLuans to count.
     * @example
     * // Count the number of BinhLuans
     * const count = await prisma.binhLuan.count({
     *   where: {
     *     // ... the filter for the BinhLuans we want to count
     *   }
     * })
    **/
    count<T extends BinhLuanCountArgs>(
      args?: Subset<T, BinhLuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinhLuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinhLuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinhLuanAggregateArgs>(args: Subset<T, BinhLuanAggregateArgs>): Prisma.PrismaPromise<GetBinhLuanAggregateType<T>>

    /**
     * Group by BinhLuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinhLuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinhLuanGroupByArgs['orderBy'] }
        : { orderBy?: BinhLuanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinhLuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinhLuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BinhLuan model
   */
  readonly fields: BinhLuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BinhLuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinhLuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Phong<T extends PhongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhongDefaultArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BinhLuan model
   */
  interface BinhLuanFieldRefs {
    readonly id: FieldRef<"BinhLuan", 'Int'>
    readonly ma_phong: FieldRef<"BinhLuan", 'Int'>
    readonly ma_nguoi_binh_luan: FieldRef<"BinhLuan", 'Int'>
    readonly ngay_binh_luan: FieldRef<"BinhLuan", 'DateTime'>
    readonly noi_dung: FieldRef<"BinhLuan", 'String'>
    readonly sao_binh_luan: FieldRef<"BinhLuan", 'Int'>
    readonly deletedBy: FieldRef<"BinhLuan", 'Int'>
    readonly isDeleted: FieldRef<"BinhLuan", 'Boolean'>
    readonly deletedAt: FieldRef<"BinhLuan", 'DateTime'>
    readonly createdAt: FieldRef<"BinhLuan", 'DateTime'>
    readonly updatedAt: FieldRef<"BinhLuan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BinhLuan findUnique
   */
  export type BinhLuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where: BinhLuanWhereUniqueInput
  }

  /**
   * BinhLuan findUniqueOrThrow
   */
  export type BinhLuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where: BinhLuanWhereUniqueInput
  }

  /**
   * BinhLuan findFirst
   */
  export type BinhLuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinhLuans.
     */
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }

  /**
   * BinhLuan findFirstOrThrow
   */
  export type BinhLuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinhLuans.
     */
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }

  /**
   * BinhLuan findMany
   */
  export type BinhLuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuans to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }

  /**
   * BinhLuan create
   */
  export type BinhLuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The data needed to create a BinhLuan.
     */
    data: XOR<BinhLuanCreateInput, BinhLuanUncheckedCreateInput>
  }

  /**
   * BinhLuan createMany
   */
  export type BinhLuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BinhLuans.
     */
    data: BinhLuanCreateManyInput | BinhLuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BinhLuan update
   */
  export type BinhLuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The data needed to update a BinhLuan.
     */
    data: XOR<BinhLuanUpdateInput, BinhLuanUncheckedUpdateInput>
    /**
     * Choose, which BinhLuan to update.
     */
    where: BinhLuanWhereUniqueInput
  }

  /**
   * BinhLuan updateMany
   */
  export type BinhLuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BinhLuans.
     */
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyInput>
    /**
     * Filter which BinhLuans to update
     */
    where?: BinhLuanWhereInput
    /**
     * Limit how many BinhLuans to update.
     */
    limit?: number
  }

  /**
   * BinhLuan upsert
   */
  export type BinhLuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The filter to search for the BinhLuan to update in case it exists.
     */
    where: BinhLuanWhereUniqueInput
    /**
     * In case the BinhLuan found by the `where` argument doesn't exist, create a new BinhLuan with this data.
     */
    create: XOR<BinhLuanCreateInput, BinhLuanUncheckedCreateInput>
    /**
     * In case the BinhLuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinhLuanUpdateInput, BinhLuanUncheckedUpdateInput>
  }

  /**
   * BinhLuan delete
   */
  export type BinhLuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter which BinhLuan to delete.
     */
    where: BinhLuanWhereUniqueInput
  }

  /**
   * BinhLuan deleteMany
   */
  export type BinhLuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinhLuans to delete
     */
    where?: BinhLuanWhereInput
    /**
     * Limit how many BinhLuans to delete.
     */
    limit?: number
  }

  /**
   * BinhLuan without action
   */
  export type BinhLuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
  }


  /**
   * Model DatPhong
   */

  export type AggregateDatPhong = {
    _count: DatPhongCountAggregateOutputType | null
    _avg: DatPhongAvgAggregateOutputType | null
    _sum: DatPhongSumAggregateOutputType | null
    _min: DatPhongMinAggregateOutputType | null
    _max: DatPhongMaxAggregateOutputType | null
  }

  export type DatPhongAvgAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
    deletedBy: number | null
  }

  export type DatPhongSumAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
    deletedBy: number | null
  }

  export type DatPhongMinAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ngay_den: Date | null
    ngay_di: Date | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatPhongMaxAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ngay_den: Date | null
    ngay_di: Date | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatPhongCountAggregateOutputType = {
    id: number
    ma_phong: number
    ngay_den: number
    ngay_di: number
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DatPhongAvgAggregateInputType = {
    id?: true
    ma_phong?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    deletedBy?: true
  }

  export type DatPhongSumAggregateInputType = {
    id?: true
    ma_phong?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    deletedBy?: true
  }

  export type DatPhongMinAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatPhongMaxAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatPhongCountAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DatPhongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatPhong to aggregate.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatPhongs
    **/
    _count?: true | DatPhongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatPhongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatPhongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatPhongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatPhongMaxAggregateInputType
  }

  export type GetDatPhongAggregateType<T extends DatPhongAggregateArgs> = {
        [P in keyof T & keyof AggregateDatPhong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatPhong[P]>
      : GetScalarType<T[P], AggregateDatPhong[P]>
  }




  export type DatPhongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithAggregationInput | DatPhongOrderByWithAggregationInput[]
    by: DatPhongScalarFieldEnum[] | DatPhongScalarFieldEnum
    having?: DatPhongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatPhongCountAggregateInputType | true
    _avg?: DatPhongAvgAggregateInputType
    _sum?: DatPhongSumAggregateInputType
    _min?: DatPhongMinAggregateInputType
    _max?: DatPhongMaxAggregateInputType
  }

  export type DatPhongGroupByOutputType = {
    id: number
    ma_phong: number
    ngay_den: Date
    ngay_di: Date
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DatPhongCountAggregateOutputType | null
    _avg: DatPhongAvgAggregateOutputType | null
    _sum: DatPhongSumAggregateOutputType | null
    _min: DatPhongMinAggregateOutputType | null
    _max: DatPhongMaxAggregateOutputType | null
  }

  type GetDatPhongGroupByPayload<T extends DatPhongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatPhongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatPhongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatPhongGroupByOutputType[P]>
            : GetScalarType<T[P], DatPhongGroupByOutputType[P]>
        }
      >
    >


  export type DatPhongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ma_phong?: boolean
    ngay_den?: boolean
    ngay_di?: boolean
    so_luong_khach?: boolean
    ma_nguoi_dat?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datPhong"]>



  export type DatPhongSelectScalar = {
    id?: boolean
    ma_phong?: boolean
    ngay_den?: boolean
    ngay_di?: boolean
    so_luong_khach?: boolean
    ma_nguoi_dat?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DatPhongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ma_phong" | "ngay_den" | "ngay_di" | "so_luong_khach" | "ma_nguoi_dat" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["datPhong"]>
  export type DatPhongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
  }

  export type $DatPhongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatPhong"
    objects: {
      Phong: Prisma.$PhongPayload<ExtArgs>
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ma_phong: number
      ngay_den: Date
      ngay_di: Date
      so_luong_khach: number
      ma_nguoi_dat: number
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["datPhong"]>
    composites: {}
  }

  type DatPhongGetPayload<S extends boolean | null | undefined | DatPhongDefaultArgs> = $Result.GetResult<Prisma.$DatPhongPayload, S>

  type DatPhongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatPhongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatPhongCountAggregateInputType | true
    }

  export interface DatPhongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatPhong'], meta: { name: 'DatPhong' } }
    /**
     * Find zero or one DatPhong that matches the filter.
     * @param {DatPhongFindUniqueArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatPhongFindUniqueArgs>(args: SelectSubset<T, DatPhongFindUniqueArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatPhong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatPhongFindUniqueOrThrowArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatPhongFindUniqueOrThrowArgs>(args: SelectSubset<T, DatPhongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatPhong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindFirstArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatPhongFindFirstArgs>(args?: SelectSubset<T, DatPhongFindFirstArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatPhong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindFirstOrThrowArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatPhongFindFirstOrThrowArgs>(args?: SelectSubset<T, DatPhongFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatPhongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatPhongs
     * const datPhongs = await prisma.datPhong.findMany()
     * 
     * // Get first 10 DatPhongs
     * const datPhongs = await prisma.datPhong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datPhongWithIdOnly = await prisma.datPhong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatPhongFindManyArgs>(args?: SelectSubset<T, DatPhongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatPhong.
     * @param {DatPhongCreateArgs} args - Arguments to create a DatPhong.
     * @example
     * // Create one DatPhong
     * const DatPhong = await prisma.datPhong.create({
     *   data: {
     *     // ... data to create a DatPhong
     *   }
     * })
     * 
     */
    create<T extends DatPhongCreateArgs>(args: SelectSubset<T, DatPhongCreateArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatPhongs.
     * @param {DatPhongCreateManyArgs} args - Arguments to create many DatPhongs.
     * @example
     * // Create many DatPhongs
     * const datPhong = await prisma.datPhong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatPhongCreateManyArgs>(args?: SelectSubset<T, DatPhongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DatPhong.
     * @param {DatPhongDeleteArgs} args - Arguments to delete one DatPhong.
     * @example
     * // Delete one DatPhong
     * const DatPhong = await prisma.datPhong.delete({
     *   where: {
     *     // ... filter to delete one DatPhong
     *   }
     * })
     * 
     */
    delete<T extends DatPhongDeleteArgs>(args: SelectSubset<T, DatPhongDeleteArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatPhong.
     * @param {DatPhongUpdateArgs} args - Arguments to update one DatPhong.
     * @example
     * // Update one DatPhong
     * const datPhong = await prisma.datPhong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatPhongUpdateArgs>(args: SelectSubset<T, DatPhongUpdateArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatPhongs.
     * @param {DatPhongDeleteManyArgs} args - Arguments to filter DatPhongs to delete.
     * @example
     * // Delete a few DatPhongs
     * const { count } = await prisma.datPhong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatPhongDeleteManyArgs>(args?: SelectSubset<T, DatPhongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatPhongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatPhongs
     * const datPhong = await prisma.datPhong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatPhongUpdateManyArgs>(args: SelectSubset<T, DatPhongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DatPhong.
     * @param {DatPhongUpsertArgs} args - Arguments to update or create a DatPhong.
     * @example
     * // Update or create a DatPhong
     * const datPhong = await prisma.datPhong.upsert({
     *   create: {
     *     // ... data to create a DatPhong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatPhong we want to update
     *   }
     * })
     */
    upsert<T extends DatPhongUpsertArgs>(args: SelectSubset<T, DatPhongUpsertArgs<ExtArgs>>): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatPhongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongCountArgs} args - Arguments to filter DatPhongs to count.
     * @example
     * // Count the number of DatPhongs
     * const count = await prisma.datPhong.count({
     *   where: {
     *     // ... the filter for the DatPhongs we want to count
     *   }
     * })
    **/
    count<T extends DatPhongCountArgs>(
      args?: Subset<T, DatPhongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatPhongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatPhong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatPhongAggregateArgs>(args: Subset<T, DatPhongAggregateArgs>): Prisma.PrismaPromise<GetDatPhongAggregateType<T>>

    /**
     * Group by DatPhong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatPhongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatPhongGroupByArgs['orderBy'] }
        : { orderBy?: DatPhongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatPhongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatPhongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatPhong model
   */
  readonly fields: DatPhongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatPhong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatPhongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Phong<T extends PhongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhongDefaultArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatPhong model
   */
  interface DatPhongFieldRefs {
    readonly id: FieldRef<"DatPhong", 'Int'>
    readonly ma_phong: FieldRef<"DatPhong", 'Int'>
    readonly ngay_den: FieldRef<"DatPhong", 'DateTime'>
    readonly ngay_di: FieldRef<"DatPhong", 'DateTime'>
    readonly so_luong_khach: FieldRef<"DatPhong", 'Int'>
    readonly ma_nguoi_dat: FieldRef<"DatPhong", 'Int'>
    readonly deletedBy: FieldRef<"DatPhong", 'Int'>
    readonly isDeleted: FieldRef<"DatPhong", 'Boolean'>
    readonly deletedAt: FieldRef<"DatPhong", 'DateTime'>
    readonly createdAt: FieldRef<"DatPhong", 'DateTime'>
    readonly updatedAt: FieldRef<"DatPhong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DatPhong findUnique
   */
  export type DatPhongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where: DatPhongWhereUniqueInput
  }

  /**
   * DatPhong findUniqueOrThrow
   */
  export type DatPhongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where: DatPhongWhereUniqueInput
  }

  /**
   * DatPhong findFirst
   */
  export type DatPhongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatPhongs.
     */
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }

  /**
   * DatPhong findFirstOrThrow
   */
  export type DatPhongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatPhongs.
     */
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }

  /**
   * DatPhong findMany
   */
  export type DatPhongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhongs to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }

  /**
   * DatPhong create
   */
  export type DatPhongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The data needed to create a DatPhong.
     */
    data: XOR<DatPhongCreateInput, DatPhongUncheckedCreateInput>
  }

  /**
   * DatPhong createMany
   */
  export type DatPhongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatPhongs.
     */
    data: DatPhongCreateManyInput | DatPhongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatPhong update
   */
  export type DatPhongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The data needed to update a DatPhong.
     */
    data: XOR<DatPhongUpdateInput, DatPhongUncheckedUpdateInput>
    /**
     * Choose, which DatPhong to update.
     */
    where: DatPhongWhereUniqueInput
  }

  /**
   * DatPhong updateMany
   */
  export type DatPhongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatPhongs.
     */
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyInput>
    /**
     * Filter which DatPhongs to update
     */
    where?: DatPhongWhereInput
    /**
     * Limit how many DatPhongs to update.
     */
    limit?: number
  }

  /**
   * DatPhong upsert
   */
  export type DatPhongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The filter to search for the DatPhong to update in case it exists.
     */
    where: DatPhongWhereUniqueInput
    /**
     * In case the DatPhong found by the `where` argument doesn't exist, create a new DatPhong with this data.
     */
    create: XOR<DatPhongCreateInput, DatPhongUncheckedCreateInput>
    /**
     * In case the DatPhong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatPhongUpdateInput, DatPhongUncheckedUpdateInput>
  }

  /**
   * DatPhong delete
   */
  export type DatPhongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter which DatPhong to delete.
     */
    where: DatPhongWhereUniqueInput
  }

  /**
   * DatPhong deleteMany
   */
  export type DatPhongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatPhongs to delete
     */
    where?: DatPhongWhereInput
    /**
     * Limit how many DatPhongs to delete.
     */
    limit?: number
  }

  /**
   * DatPhong without action
   */
  export type DatPhongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
  }


  /**
   * Model Genders
   */

  export type AggregateGenders = {
    _count: GendersCountAggregateOutputType | null
    _avg: GendersAvgAggregateOutputType | null
    _sum: GendersSumAggregateOutputType | null
    _min: GendersMinAggregateOutputType | null
    _max: GendersMaxAggregateOutputType | null
  }

  export type GendersAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type GendersSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type GendersMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GendersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GendersCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GendersAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type GendersSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type GendersMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GendersMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GendersCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GendersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to aggregate.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GendersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GendersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GendersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GendersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GendersMaxAggregateInputType
  }

  export type GetGendersAggregateType<T extends GendersAggregateArgs> = {
        [P in keyof T & keyof AggregateGenders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenders[P]>
      : GetScalarType<T[P], AggregateGenders[P]>
  }




  export type GendersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GendersWhereInput
    orderBy?: GendersOrderByWithAggregationInput | GendersOrderByWithAggregationInput[]
    by: GendersScalarFieldEnum[] | GendersScalarFieldEnum
    having?: GendersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GendersCountAggregateInputType | true
    _avg?: GendersAvgAggregateInputType
    _sum?: GendersSumAggregateInputType
    _min?: GendersMinAggregateInputType
    _max?: GendersMaxAggregateInputType
  }

  export type GendersGroupByOutputType = {
    id: number
    name: string | null
    isActive: boolean | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GendersCountAggregateOutputType | null
    _avg: GendersAvgAggregateOutputType | null
    _sum: GendersSumAggregateOutputType | null
    _min: GendersMinAggregateOutputType | null
    _max: GendersMaxAggregateOutputType | null
  }

  type GetGendersGroupByPayload<T extends GendersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GendersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GendersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GendersGroupByOutputType[P]>
            : GetScalarType<T[P], GendersGroupByOutputType[P]>
        }
      >
    >


  export type GendersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    NguoiDung?: boolean | Genders$NguoiDungArgs<ExtArgs>
    _count?: boolean | GendersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genders"]>



  export type GendersSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GendersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["genders"]>
  export type GendersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | Genders$NguoiDungArgs<ExtArgs>
    _count?: boolean | GendersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GendersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genders"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      isActive: boolean | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genders"]>
    composites: {}
  }

  type GendersGetPayload<S extends boolean | null | undefined | GendersDefaultArgs> = $Result.GetResult<Prisma.$GendersPayload, S>

  type GendersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GendersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GendersCountAggregateInputType | true
    }

  export interface GendersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genders'], meta: { name: 'Genders' } }
    /**
     * Find zero or one Genders that matches the filter.
     * @param {GendersFindUniqueArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GendersFindUniqueArgs>(args: SelectSubset<T, GendersFindUniqueArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GendersFindUniqueOrThrowArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GendersFindUniqueOrThrowArgs>(args: SelectSubset<T, GendersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindFirstArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GendersFindFirstArgs>(args?: SelectSubset<T, GendersFindFirstArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindFirstOrThrowArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GendersFindFirstOrThrowArgs>(args?: SelectSubset<T, GendersFindFirstOrThrowArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.genders.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.genders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gendersWithIdOnly = await prisma.genders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GendersFindManyArgs>(args?: SelectSubset<T, GendersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genders.
     * @param {GendersCreateArgs} args - Arguments to create a Genders.
     * @example
     * // Create one Genders
     * const Genders = await prisma.genders.create({
     *   data: {
     *     // ... data to create a Genders
     *   }
     * })
     * 
     */
    create<T extends GendersCreateArgs>(args: SelectSubset<T, GendersCreateArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GendersCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const genders = await prisma.genders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GendersCreateManyArgs>(args?: SelectSubset<T, GendersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genders.
     * @param {GendersDeleteArgs} args - Arguments to delete one Genders.
     * @example
     * // Delete one Genders
     * const Genders = await prisma.genders.delete({
     *   where: {
     *     // ... filter to delete one Genders
     *   }
     * })
     * 
     */
    delete<T extends GendersDeleteArgs>(args: SelectSubset<T, GendersDeleteArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genders.
     * @param {GendersUpdateArgs} args - Arguments to update one Genders.
     * @example
     * // Update one Genders
     * const genders = await prisma.genders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GendersUpdateArgs>(args: SelectSubset<T, GendersUpdateArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GendersDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.genders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GendersDeleteManyArgs>(args?: SelectSubset<T, GendersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const genders = await prisma.genders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GendersUpdateManyArgs>(args: SelectSubset<T, GendersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genders.
     * @param {GendersUpsertArgs} args - Arguments to update or create a Genders.
     * @example
     * // Update or create a Genders
     * const genders = await prisma.genders.upsert({
     *   create: {
     *     // ... data to create a Genders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genders we want to update
     *   }
     * })
     */
    upsert<T extends GendersUpsertArgs>(args: SelectSubset<T, GendersUpsertArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.genders.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GendersCountArgs>(
      args?: Subset<T, GendersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GendersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GendersAggregateArgs>(args: Subset<T, GendersAggregateArgs>): Prisma.PrismaPromise<GetGendersAggregateType<T>>

    /**
     * Group by Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GendersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GendersGroupByArgs['orderBy'] }
        : { orderBy?: GendersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GendersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGendersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genders model
   */
  readonly fields: GendersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GendersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends Genders$NguoiDungArgs<ExtArgs> = {}>(args?: Subset<T, Genders$NguoiDungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genders model
   */
  interface GendersFieldRefs {
    readonly id: FieldRef<"Genders", 'Int'>
    readonly name: FieldRef<"Genders", 'String'>
    readonly isActive: FieldRef<"Genders", 'Boolean'>
    readonly deletedBy: FieldRef<"Genders", 'Int'>
    readonly isDeleted: FieldRef<"Genders", 'Boolean'>
    readonly deletedAt: FieldRef<"Genders", 'DateTime'>
    readonly createdAt: FieldRef<"Genders", 'DateTime'>
    readonly updatedAt: FieldRef<"Genders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genders findUnique
   */
  export type GendersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders findUniqueOrThrow
   */
  export type GendersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders findFirst
   */
  export type GendersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders findFirstOrThrow
   */
  export type GendersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders findMany
   */
  export type GendersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders create
   */
  export type GendersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The data needed to create a Genders.
     */
    data?: XOR<GendersCreateInput, GendersUncheckedCreateInput>
  }

  /**
   * Genders createMany
   */
  export type GendersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GendersCreateManyInput | GendersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genders update
   */
  export type GendersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The data needed to update a Genders.
     */
    data: XOR<GendersUpdateInput, GendersUncheckedUpdateInput>
    /**
     * Choose, which Genders to update.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders updateMany
   */
  export type GendersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GendersUpdateManyMutationInput, GendersUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GendersWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Genders upsert
   */
  export type GendersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The filter to search for the Genders to update in case it exists.
     */
    where: GendersWhereUniqueInput
    /**
     * In case the Genders found by the `where` argument doesn't exist, create a new Genders with this data.
     */
    create: XOR<GendersCreateInput, GendersUncheckedCreateInput>
    /**
     * In case the Genders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GendersUpdateInput, GendersUncheckedUpdateInput>
  }

  /**
   * Genders delete
   */
  export type GendersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter which Genders to delete.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders deleteMany
   */
  export type GendersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GendersWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Genders.NguoiDung
   */
  export type Genders$NguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    cursor?: NguoiDungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * Genders without action
   */
  export type GendersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
  }


  /**
   * Model NguoiDung
   */

  export type AggregateNguoiDung = {
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  export type NguoiDungAvgAggregateOutputType = {
    id: number | null
    genderId: number | null
    roleId: number | null
    deletedBy: number | null
  }

  export type NguoiDungSumAggregateOutputType = {
    id: number | null
    genderId: number | null
    roleId: number | null
    deletedBy: number | null
  }

  export type NguoiDungMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    phone: string | null
    birthday: string | null
    genderId: number | null
    roleId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NguoiDungMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    phone: string | null
    birthday: string | null
    genderId: number | null
    roleId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NguoiDungCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    phone: number
    birthday: number
    genderId: number
    roleId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NguoiDungAvgAggregateInputType = {
    id?: true
    genderId?: true
    roleId?: true
    deletedBy?: true
  }

  export type NguoiDungSumAggregateInputType = {
    id?: true
    genderId?: true
    roleId?: true
    deletedBy?: true
  }

  export type NguoiDungMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    phone?: true
    birthday?: true
    genderId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NguoiDungMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    phone?: true
    birthday?: true
    genderId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NguoiDungCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    phone?: true
    birthday?: true
    genderId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDung to aggregate.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NguoiDungs
    **/
    _count?: true | NguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NguoiDungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NguoiDungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NguoiDungMaxAggregateInputType
  }

  export type GetNguoiDungAggregateType<T extends NguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoiDung[P]>
      : GetScalarType<T[P], AggregateNguoiDung[P]>
  }




  export type NguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithAggregationInput | NguoiDungOrderByWithAggregationInput[]
    by: NguoiDungScalarFieldEnum[] | NguoiDungScalarFieldEnum
    having?: NguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NguoiDungCountAggregateInputType | true
    _avg?: NguoiDungAvgAggregateInputType
    _sum?: NguoiDungSumAggregateInputType
    _min?: NguoiDungMinAggregateInputType
    _max?: NguoiDungMaxAggregateInputType
  }

  export type NguoiDungGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string | null
    avatar: string | null
    phone: string | null
    birthday: string | null
    genderId: number
    roleId: number
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  type GetNguoiDungGroupByPayload<T extends NguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type NguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    phone?: boolean
    birthday?: boolean
    genderId?: boolean
    roleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BinhLuan?: boolean | NguoiDung$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | NguoiDung$DatPhongArgs<ExtArgs>
    Genders?: boolean | GendersDefaultArgs<ExtArgs>
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoiDung"]>



  export type NguoiDungSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    phone?: boolean
    birthday?: boolean
    genderId?: boolean
    roleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NguoiDungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "phone" | "birthday" | "genderId" | "roleId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["nguoiDung"]>
  export type NguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | NguoiDung$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | NguoiDung$DatPhongArgs<ExtArgs>
    Genders?: boolean | GendersDefaultArgs<ExtArgs>
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NguoiDung"
    objects: {
      BinhLuan: Prisma.$BinhLuanPayload<ExtArgs>[]
      DatPhong: Prisma.$DatPhongPayload<ExtArgs>[]
      Genders: Prisma.$GendersPayload<ExtArgs>
      Roles: Prisma.$RolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      avatar: string | null
      phone: string | null
      birthday: string | null
      genderId: number
      roleId: number
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nguoiDung"]>
    composites: {}
  }

  type NguoiDungGetPayload<S extends boolean | null | undefined | NguoiDungDefaultArgs> = $Result.GetResult<Prisma.$NguoiDungPayload, S>

  type NguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NguoiDungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NguoiDungCountAggregateInputType | true
    }

  export interface NguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NguoiDung'], meta: { name: 'NguoiDung' } }
    /**
     * Find zero or one NguoiDung that matches the filter.
     * @param {NguoiDungFindUniqueArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NguoiDungFindUniqueArgs>(args: SelectSubset<T, NguoiDungFindUniqueArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NguoiDung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NguoiDungFindUniqueOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NguoiDungFindUniqueOrThrowArgs>(args: SelectSubset<T, NguoiDungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NguoiDungFindFirstArgs>(args?: SelectSubset<T, NguoiDungFindFirstArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NguoiDungFindFirstOrThrowArgs>(args?: SelectSubset<T, NguoiDungFindFirstOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany()
     * 
     * // Get first 10 NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nguoiDungWithIdOnly = await prisma.nguoiDung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NguoiDungFindManyArgs>(args?: SelectSubset<T, NguoiDungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NguoiDung.
     * @param {NguoiDungCreateArgs} args - Arguments to create a NguoiDung.
     * @example
     * // Create one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.create({
     *   data: {
     *     // ... data to create a NguoiDung
     *   }
     * })
     * 
     */
    create<T extends NguoiDungCreateArgs>(args: SelectSubset<T, NguoiDungCreateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NguoiDungs.
     * @param {NguoiDungCreateManyArgs} args - Arguments to create many NguoiDungs.
     * @example
     * // Create many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NguoiDungCreateManyArgs>(args?: SelectSubset<T, NguoiDungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NguoiDung.
     * @param {NguoiDungDeleteArgs} args - Arguments to delete one NguoiDung.
     * @example
     * // Delete one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.delete({
     *   where: {
     *     // ... filter to delete one NguoiDung
     *   }
     * })
     * 
     */
    delete<T extends NguoiDungDeleteArgs>(args: SelectSubset<T, NguoiDungDeleteArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NguoiDung.
     * @param {NguoiDungUpdateArgs} args - Arguments to update one NguoiDung.
     * @example
     * // Update one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NguoiDungUpdateArgs>(args: SelectSubset<T, NguoiDungUpdateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NguoiDungs.
     * @param {NguoiDungDeleteManyArgs} args - Arguments to filter NguoiDungs to delete.
     * @example
     * // Delete a few NguoiDungs
     * const { count } = await prisma.nguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NguoiDungDeleteManyArgs>(args?: SelectSubset<T, NguoiDungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NguoiDungUpdateManyArgs>(args: SelectSubset<T, NguoiDungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NguoiDung.
     * @param {NguoiDungUpsertArgs} args - Arguments to update or create a NguoiDung.
     * @example
     * // Update or create a NguoiDung
     * const nguoiDung = await prisma.nguoiDung.upsert({
     *   create: {
     *     // ... data to create a NguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NguoiDung we want to update
     *   }
     * })
     */
    upsert<T extends NguoiDungUpsertArgs>(args: SelectSubset<T, NguoiDungUpsertArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungCountArgs} args - Arguments to filter NguoiDungs to count.
     * @example
     * // Count the number of NguoiDungs
     * const count = await prisma.nguoiDung.count({
     *   where: {
     *     // ... the filter for the NguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends NguoiDungCountArgs>(
      args?: Subset<T, NguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NguoiDungAggregateArgs>(args: Subset<T, NguoiDungAggregateArgs>): Prisma.PrismaPromise<GetNguoiDungAggregateType<T>>

    /**
     * Group by NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: NguoiDungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NguoiDung model
   */
  readonly fields: NguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BinhLuan<T extends NguoiDung$BinhLuanArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$BinhLuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DatPhong<T extends NguoiDung$DatPhongArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$DatPhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Genders<T extends GendersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GendersDefaultArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NguoiDung model
   */
  interface NguoiDungFieldRefs {
    readonly id: FieldRef<"NguoiDung", 'Int'>
    readonly name: FieldRef<"NguoiDung", 'String'>
    readonly email: FieldRef<"NguoiDung", 'String'>
    readonly password: FieldRef<"NguoiDung", 'String'>
    readonly avatar: FieldRef<"NguoiDung", 'String'>
    readonly phone: FieldRef<"NguoiDung", 'String'>
    readonly birthday: FieldRef<"NguoiDung", 'String'>
    readonly genderId: FieldRef<"NguoiDung", 'Int'>
    readonly roleId: FieldRef<"NguoiDung", 'Int'>
    readonly deletedBy: FieldRef<"NguoiDung", 'Int'>
    readonly isDeleted: FieldRef<"NguoiDung", 'Boolean'>
    readonly deletedAt: FieldRef<"NguoiDung", 'DateTime'>
    readonly createdAt: FieldRef<"NguoiDung", 'DateTime'>
    readonly updatedAt: FieldRef<"NguoiDung", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NguoiDung findUnique
   */
  export type NguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findUniqueOrThrow
   */
  export type NguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findFirst
   */
  export type NguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findFirstOrThrow
   */
  export type NguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findMany
   */
  export type NguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDungs to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung create
   */
  export type NguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a NguoiDung.
     */
    data: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
  }

  /**
   * NguoiDung createMany
   */
  export type NguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NguoiDungs.
     */
    data: NguoiDungCreateManyInput | NguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NguoiDung update
   */
  export type NguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a NguoiDung.
     */
    data: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
    /**
     * Choose, which NguoiDung to update.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung updateMany
   */
  export type NguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NguoiDungs.
     */
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which NguoiDungs to update
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to update.
     */
    limit?: number
  }

  /**
   * NguoiDung upsert
   */
  export type NguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the NguoiDung to update in case it exists.
     */
    where: NguoiDungWhereUniqueInput
    /**
     * In case the NguoiDung found by the `where` argument doesn't exist, create a new NguoiDung with this data.
     */
    create: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
    /**
     * In case the NguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
  }

  /**
   * NguoiDung delete
   */
  export type NguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter which NguoiDung to delete.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung deleteMany
   */
  export type NguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDungs to delete
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to delete.
     */
    limit?: number
  }

  /**
   * NguoiDung.BinhLuan
   */
  export type NguoiDung$BinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    cursor?: BinhLuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }

  /**
   * NguoiDung.DatPhong
   */
  export type NguoiDung$DatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    cursor?: DatPhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }

  /**
   * NguoiDung without action
   */
  export type NguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
  }


  /**
   * Model Permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type PermissionsSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    endpoint: string | null
    method: string | null
    module: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    endpoint: string | null
    method: string | null
    module: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    name: number
    endpoint: number
    method: number
    module: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionsAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type PermissionsSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type PermissionsMinAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to aggregate.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type PermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionsWhereInput
    orderBy?: PermissionsOrderByWithAggregationInput | PermissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: PermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _avg?: PermissionsAvgAggregateInputType
    _sum?: PermissionsSumAggregateInputType
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends PermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type PermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    endpoint?: boolean
    method?: boolean
    module?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RolePermission?: boolean | Permissions$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>



  export type PermissionsSelectScalar = {
    id?: boolean
    name?: boolean
    endpoint?: boolean
    method?: boolean
    module?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "endpoint" | "method" | "module" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["permissions"]>
  export type PermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Permissions$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissions"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      endpoint: string
      method: string
      module: string
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type PermissionsGetPayload<S extends boolean | null | undefined | PermissionsDefaultArgs> = $Result.GetResult<Prisma.$PermissionsPayload, S>

  type PermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface PermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissions'], meta: { name: 'Permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {PermissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionsFindUniqueArgs>(args: SelectSubset<T, PermissionsFindUniqueArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionsFindFirstArgs>(args?: SelectSubset<T, PermissionsFindFirstArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionsFindManyArgs>(args?: SelectSubset<T, PermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissions.
     * @param {PermissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends PermissionsCreateArgs>(args: SelectSubset<T, PermissionsCreateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionsCreateManyArgs>(args?: SelectSubset<T, PermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permissions.
     * @param {PermissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends PermissionsDeleteArgs>(args: SelectSubset<T, PermissionsDeleteArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissions.
     * @param {PermissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionsUpdateArgs>(args: SelectSubset<T, PermissionsUpdateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionsDeleteManyArgs>(args?: SelectSubset<T, PermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionsUpdateManyArgs>(args: SelectSubset<T, PermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permissions.
     * @param {PermissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends PermissionsUpsertArgs>(args: SelectSubset<T, PermissionsUpsertArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionsCountArgs>(
      args?: Subset<T, PermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionsGroupByArgs['orderBy'] }
        : { orderBy?: PermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissions model
   */
  readonly fields: PermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermission<T extends Permissions$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Permissions$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permissions model
   */
  interface PermissionsFieldRefs {
    readonly id: FieldRef<"Permissions", 'Int'>
    readonly name: FieldRef<"Permissions", 'String'>
    readonly endpoint: FieldRef<"Permissions", 'String'>
    readonly method: FieldRef<"Permissions", 'String'>
    readonly module: FieldRef<"Permissions", 'String'>
    readonly deletedBy: FieldRef<"Permissions", 'Int'>
    readonly isDeleted: FieldRef<"Permissions", 'Boolean'>
    readonly deletedAt: FieldRef<"Permissions", 'DateTime'>
    readonly createdAt: FieldRef<"Permissions", 'DateTime'>
    readonly updatedAt: FieldRef<"Permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permissions findUnique
   */
  export type PermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findUniqueOrThrow
   */
  export type PermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findFirst
   */
  export type PermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findFirstOrThrow
   */
  export type PermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findMany
   */
  export type PermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions create
   */
  export type PermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissions.
     */
    data: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
  }

  /**
   * Permissions createMany
   */
  export type PermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionsCreateManyInput | PermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissions update
   */
  export type PermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissions.
     */
    data: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
    /**
     * Choose, which Permissions to update.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions updateMany
   */
  export type PermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionsUpdateManyMutationInput, PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permissions upsert
   */
  export type PermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissions to update in case it exists.
     */
    where: PermissionsWhereUniqueInput
    /**
     * In case the Permissions found by the `where` argument doesn't exist, create a new Permissions with this data.
     */
    create: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
    /**
     * In case the Permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
  }

  /**
   * Permissions delete
   */
  export type PermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter which Permissions to delete.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions deleteMany
   */
  export type PermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permissions.RolePermission
   */
  export type Permissions$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permissions without action
   */
  export type PermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
  }


  /**
   * Model Phong
   */

  export type AggregatePhong = {
    _count: PhongCountAggregateOutputType | null
    _avg: PhongAvgAggregateOutputType | null
    _sum: PhongSumAggregateOutputType | null
    _min: PhongMinAggregateOutputType | null
    _max: PhongMaxAggregateOutputType | null
  }

  export type PhongAvgAggregateOutputType = {
    id: number | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    gia_tien: number | null
    ma_vi_tri: number | null
    deletedBy: number | null
  }

  export type PhongSumAggregateOutputType = {
    id: number | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    gia_tien: number | null
    ma_vi_tri: number | null
    deletedBy: number | null
  }

  export type PhongMinAggregateOutputType = {
    id: number | null
    ten_phong: string | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    mo_ta: string | null
    gia_tien: number | null
    may_giat: boolean | null
    ban_la: boolean | null
    tivi: boolean | null
    dieu_hoa: boolean | null
    wifi: boolean | null
    bep: boolean | null
    do_xe: boolean | null
    ho_boi: boolean | null
    ban_ui: boolean | null
    ma_vi_tri: number | null
    hinh_anh: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhongMaxAggregateOutputType = {
    id: number | null
    ten_phong: string | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    mo_ta: string | null
    gia_tien: number | null
    may_giat: boolean | null
    ban_la: boolean | null
    tivi: boolean | null
    dieu_hoa: boolean | null
    wifi: boolean | null
    bep: boolean | null
    do_xe: boolean | null
    ho_boi: boolean | null
    ban_ui: boolean | null
    ma_vi_tri: number | null
    hinh_anh: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhongCountAggregateOutputType = {
    id: number
    ten_phong: number
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta: number
    gia_tien: number
    may_giat: number
    ban_la: number
    tivi: number
    dieu_hoa: number
    wifi: number
    bep: number
    do_xe: number
    ho_boi: number
    ban_ui: number
    ma_vi_tri: number
    hinh_anh: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhongAvgAggregateInputType = {
    id?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    gia_tien?: true
    ma_vi_tri?: true
    deletedBy?: true
  }

  export type PhongSumAggregateInputType = {
    id?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    gia_tien?: true
    ma_vi_tri?: true
    deletedBy?: true
  }

  export type PhongMinAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    ma_vi_tri?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhongMaxAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    ma_vi_tri?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhongCountAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    ma_vi_tri?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phong to aggregate.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationInput | PhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phongs
    **/
    _count?: true | PhongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhongMaxAggregateInputType
  }

  export type GetPhongAggregateType<T extends PhongAggregateArgs> = {
        [P in keyof T & keyof AggregatePhong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhong[P]>
      : GetScalarType<T[P], AggregatePhong[P]>
  }




  export type PhongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhongWhereInput
    orderBy?: PhongOrderByWithAggregationInput | PhongOrderByWithAggregationInput[]
    by: PhongScalarFieldEnum[] | PhongScalarFieldEnum
    having?: PhongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhongCountAggregateInputType | true
    _avg?: PhongAvgAggregateInputType
    _sum?: PhongSumAggregateInputType
    _min?: PhongMinAggregateInputType
    _max?: PhongMaxAggregateInputType
  }

  export type PhongGroupByOutputType = {
    id: number
    ten_phong: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta: string | null
    gia_tien: number
    may_giat: boolean
    ban_la: boolean
    tivi: boolean
    dieu_hoa: boolean
    wifi: boolean
    bep: boolean
    do_xe: boolean
    ho_boi: boolean
    ban_ui: boolean
    ma_vi_tri: number
    hinh_anh: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PhongCountAggregateOutputType | null
    _avg: PhongAvgAggregateOutputType | null
    _sum: PhongSumAggregateOutputType | null
    _min: PhongMinAggregateOutputType | null
    _max: PhongMaxAggregateOutputType | null
  }

  type GetPhongGroupByPayload<T extends PhongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhongGroupByOutputType[P]>
            : GetScalarType<T[P], PhongGroupByOutputType[P]>
        }
      >
    >


  export type PhongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ten_phong?: boolean
    khach?: boolean
    phong_ngu?: boolean
    giuong?: boolean
    phong_tam?: boolean
    mo_ta?: boolean
    gia_tien?: boolean
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri?: boolean
    hinh_anh?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BinhLuan?: boolean | Phong$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | Phong$DatPhongArgs<ExtArgs>
    ViTri?: boolean | ViTriDefaultArgs<ExtArgs>
    _count?: boolean | PhongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phong"]>



  export type PhongSelectScalar = {
    id?: boolean
    ten_phong?: boolean
    khach?: boolean
    phong_ngu?: boolean
    giuong?: boolean
    phong_tam?: boolean
    mo_ta?: boolean
    gia_tien?: boolean
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri?: boolean
    hinh_anh?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ten_phong" | "khach" | "phong_ngu" | "giuong" | "phong_tam" | "mo_ta" | "gia_tien" | "may_giat" | "ban_la" | "tivi" | "dieu_hoa" | "wifi" | "bep" | "do_xe" | "ho_boi" | "ban_ui" | "ma_vi_tri" | "hinh_anh" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["phong"]>
  export type PhongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | Phong$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | Phong$DatPhongArgs<ExtArgs>
    ViTri?: boolean | ViTriDefaultArgs<ExtArgs>
    _count?: boolean | PhongCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phong"
    objects: {
      BinhLuan: Prisma.$BinhLuanPayload<ExtArgs>[]
      DatPhong: Prisma.$DatPhongPayload<ExtArgs>[]
      ViTri: Prisma.$ViTriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ten_phong: string | null
      khach: number
      phong_ngu: number
      giuong: number
      phong_tam: number
      mo_ta: string | null
      gia_tien: number
      may_giat: boolean
      ban_la: boolean
      tivi: boolean
      dieu_hoa: boolean
      wifi: boolean
      bep: boolean
      do_xe: boolean
      ho_boi: boolean
      ban_ui: boolean
      ma_vi_tri: number
      hinh_anh: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phong"]>
    composites: {}
  }

  type PhongGetPayload<S extends boolean | null | undefined | PhongDefaultArgs> = $Result.GetResult<Prisma.$PhongPayload, S>

  type PhongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhongCountAggregateInputType | true
    }

  export interface PhongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phong'], meta: { name: 'Phong' } }
    /**
     * Find zero or one Phong that matches the filter.
     * @param {PhongFindUniqueArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhongFindUniqueArgs>(args: SelectSubset<T, PhongFindUniqueArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhongFindUniqueOrThrowArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhongFindUniqueOrThrowArgs>(args: SelectSubset<T, PhongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindFirstArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhongFindFirstArgs>(args?: SelectSubset<T, PhongFindFirstArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindFirstOrThrowArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhongFindFirstOrThrowArgs>(args?: SelectSubset<T, PhongFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phongs
     * const phongs = await prisma.phong.findMany()
     * 
     * // Get first 10 Phongs
     * const phongs = await prisma.phong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phongWithIdOnly = await prisma.phong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhongFindManyArgs>(args?: SelectSubset<T, PhongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phong.
     * @param {PhongCreateArgs} args - Arguments to create a Phong.
     * @example
     * // Create one Phong
     * const Phong = await prisma.phong.create({
     *   data: {
     *     // ... data to create a Phong
     *   }
     * })
     * 
     */
    create<T extends PhongCreateArgs>(args: SelectSubset<T, PhongCreateArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phongs.
     * @param {PhongCreateManyArgs} args - Arguments to create many Phongs.
     * @example
     * // Create many Phongs
     * const phong = await prisma.phong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhongCreateManyArgs>(args?: SelectSubset<T, PhongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phong.
     * @param {PhongDeleteArgs} args - Arguments to delete one Phong.
     * @example
     * // Delete one Phong
     * const Phong = await prisma.phong.delete({
     *   where: {
     *     // ... filter to delete one Phong
     *   }
     * })
     * 
     */
    delete<T extends PhongDeleteArgs>(args: SelectSubset<T, PhongDeleteArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phong.
     * @param {PhongUpdateArgs} args - Arguments to update one Phong.
     * @example
     * // Update one Phong
     * const phong = await prisma.phong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhongUpdateArgs>(args: SelectSubset<T, PhongUpdateArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phongs.
     * @param {PhongDeleteManyArgs} args - Arguments to filter Phongs to delete.
     * @example
     * // Delete a few Phongs
     * const { count } = await prisma.phong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhongDeleteManyArgs>(args?: SelectSubset<T, PhongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phongs
     * const phong = await prisma.phong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhongUpdateManyArgs>(args: SelectSubset<T, PhongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phong.
     * @param {PhongUpsertArgs} args - Arguments to update or create a Phong.
     * @example
     * // Update or create a Phong
     * const phong = await prisma.phong.upsert({
     *   create: {
     *     // ... data to create a Phong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phong we want to update
     *   }
     * })
     */
    upsert<T extends PhongUpsertArgs>(args: SelectSubset<T, PhongUpsertArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongCountArgs} args - Arguments to filter Phongs to count.
     * @example
     * // Count the number of Phongs
     * const count = await prisma.phong.count({
     *   where: {
     *     // ... the filter for the Phongs we want to count
     *   }
     * })
    **/
    count<T extends PhongCountArgs>(
      args?: Subset<T, PhongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhongAggregateArgs>(args: Subset<T, PhongAggregateArgs>): Prisma.PrismaPromise<GetPhongAggregateType<T>>

    /**
     * Group by Phong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhongGroupByArgs['orderBy'] }
        : { orderBy?: PhongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phong model
   */
  readonly fields: PhongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BinhLuan<T extends Phong$BinhLuanArgs<ExtArgs> = {}>(args?: Subset<T, Phong$BinhLuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DatPhong<T extends Phong$DatPhongArgs<ExtArgs> = {}>(args?: Subset<T, Phong$DatPhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ViTri<T extends ViTriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViTriDefaultArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phong model
   */
  interface PhongFieldRefs {
    readonly id: FieldRef<"Phong", 'Int'>
    readonly ten_phong: FieldRef<"Phong", 'String'>
    readonly khach: FieldRef<"Phong", 'Int'>
    readonly phong_ngu: FieldRef<"Phong", 'Int'>
    readonly giuong: FieldRef<"Phong", 'Int'>
    readonly phong_tam: FieldRef<"Phong", 'Int'>
    readonly mo_ta: FieldRef<"Phong", 'String'>
    readonly gia_tien: FieldRef<"Phong", 'Int'>
    readonly may_giat: FieldRef<"Phong", 'Boolean'>
    readonly ban_la: FieldRef<"Phong", 'Boolean'>
    readonly tivi: FieldRef<"Phong", 'Boolean'>
    readonly dieu_hoa: FieldRef<"Phong", 'Boolean'>
    readonly wifi: FieldRef<"Phong", 'Boolean'>
    readonly bep: FieldRef<"Phong", 'Boolean'>
    readonly do_xe: FieldRef<"Phong", 'Boolean'>
    readonly ho_boi: FieldRef<"Phong", 'Boolean'>
    readonly ban_ui: FieldRef<"Phong", 'Boolean'>
    readonly ma_vi_tri: FieldRef<"Phong", 'Int'>
    readonly hinh_anh: FieldRef<"Phong", 'String'>
    readonly deletedBy: FieldRef<"Phong", 'Int'>
    readonly isDeleted: FieldRef<"Phong", 'Boolean'>
    readonly deletedAt: FieldRef<"Phong", 'DateTime'>
    readonly createdAt: FieldRef<"Phong", 'DateTime'>
    readonly updatedAt: FieldRef<"Phong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Phong findUnique
   */
  export type PhongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where: PhongWhereUniqueInput
  }

  /**
   * Phong findUniqueOrThrow
   */
  export type PhongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where: PhongWhereUniqueInput
  }

  /**
   * Phong findFirst
   */
  export type PhongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationInput | PhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phongs.
     */
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }

  /**
   * Phong findFirstOrThrow
   */
  export type PhongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationInput | PhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phongs.
     */
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }

  /**
   * Phong findMany
   */
  export type PhongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phongs to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationInput | PhongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }

  /**
   * Phong create
   */
  export type PhongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The data needed to create a Phong.
     */
    data: XOR<PhongCreateInput, PhongUncheckedCreateInput>
  }

  /**
   * Phong createMany
   */
  export type PhongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phongs.
     */
    data: PhongCreateManyInput | PhongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phong update
   */
  export type PhongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The data needed to update a Phong.
     */
    data: XOR<PhongUpdateInput, PhongUncheckedUpdateInput>
    /**
     * Choose, which Phong to update.
     */
    where: PhongWhereUniqueInput
  }

  /**
   * Phong updateMany
   */
  export type PhongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phongs.
     */
    data: XOR<PhongUpdateManyMutationInput, PhongUncheckedUpdateManyInput>
    /**
     * Filter which Phongs to update
     */
    where?: PhongWhereInput
    /**
     * Limit how many Phongs to update.
     */
    limit?: number
  }

  /**
   * Phong upsert
   */
  export type PhongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The filter to search for the Phong to update in case it exists.
     */
    where: PhongWhereUniqueInput
    /**
     * In case the Phong found by the `where` argument doesn't exist, create a new Phong with this data.
     */
    create: XOR<PhongCreateInput, PhongUncheckedCreateInput>
    /**
     * In case the Phong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhongUpdateInput, PhongUncheckedUpdateInput>
  }

  /**
   * Phong delete
   */
  export type PhongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter which Phong to delete.
     */
    where: PhongWhereUniqueInput
  }

  /**
   * Phong deleteMany
   */
  export type PhongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phongs to delete
     */
    where?: PhongWhereInput
    /**
     * Limit how many Phongs to delete.
     */
    limit?: number
  }

  /**
   * Phong.BinhLuan
   */
  export type Phong$BinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinhLuan
     */
    omit?: BinhLuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhLuanInclude<ExtArgs> | null
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithRelationInput | BinhLuanOrderByWithRelationInput[]
    cursor?: BinhLuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }

  /**
   * Phong.DatPhong
   */
  export type Phong$DatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatPhong
     */
    omit?: DatPhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatPhongInclude<ExtArgs> | null
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithRelationInput | DatPhongOrderByWithRelationInput[]
    cursor?: DatPhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }

  /**
   * Phong without action
   */
  export type PhongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    deletedBy: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    deletedBy: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    isActive: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    deletedBy?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    deletedBy?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    isActive: boolean | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    Permissions?: boolean | PermissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>



  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId" | "isActive" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    Permissions?: boolean | PermissionsDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      Roles: Prisma.$RolesPayload<ExtArgs>
      Permissions: Prisma.$PermissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
      isActive: boolean | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Permissions<T extends PermissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionsDefaultArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly isActive: FieldRef<"RolePermission", 'Boolean'>
    readonly deletedBy: FieldRef<"RolePermission", 'Int'>
    readonly isDeleted: FieldRef<"RolePermission", 'Boolean'>
    readonly deletedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedAt: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    NguoiDung?: boolean | Roles$NguoiDungArgs<ExtArgs>
    RolePermission?: boolean | Roles$RolePermissionArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | Roles$NguoiDungArgs<ExtArgs>
    RolePermission?: boolean | Roles$RolePermissionArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>[]
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      isActive: boolean | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends Roles$NguoiDungArgs<ExtArgs> = {}>(args?: Subset<T, Roles$NguoiDungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RolePermission<T extends Roles$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Roles$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly description: FieldRef<"Roles", 'String'>
    readonly isActive: FieldRef<"Roles", 'Boolean'>
    readonly deletedBy: FieldRef<"Roles", 'Int'>
    readonly isDeleted: FieldRef<"Roles", 'Boolean'>
    readonly deletedAt: FieldRef<"Roles", 'DateTime'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
    readonly updatedAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data?: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.NguoiDung
   */
  export type Roles$NguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    cursor?: NguoiDungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * Roles.RolePermission
   */
  export type Roles$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model ViTri
   */

  export type AggregateViTri = {
    _count: ViTriCountAggregateOutputType | null
    _avg: ViTriAvgAggregateOutputType | null
    _sum: ViTriSumAggregateOutputType | null
    _min: ViTriMinAggregateOutputType | null
    _max: ViTriMaxAggregateOutputType | null
  }

  export type ViTriAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type ViTriSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type ViTriMinAggregateOutputType = {
    id: number | null
    ten_vi_tri: string | null
    tinh_thanh: string | null
    quoc_gia: string | null
    hinh_anh: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViTriMaxAggregateOutputType = {
    id: number | null
    ten_vi_tri: string | null
    tinh_thanh: string | null
    quoc_gia: string | null
    hinh_anh: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViTriCountAggregateOutputType = {
    id: number
    ten_vi_tri: number
    tinh_thanh: number
    quoc_gia: number
    hinh_anh: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ViTriAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type ViTriSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type ViTriMinAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViTriMaxAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViTriCountAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ViTriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViTri to aggregate.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationInput | ViTriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViTris
    **/
    _count?: true | ViTriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViTriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViTriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViTriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViTriMaxAggregateInputType
  }

  export type GetViTriAggregateType<T extends ViTriAggregateArgs> = {
        [P in keyof T & keyof AggregateViTri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViTri[P]>
      : GetScalarType<T[P], AggregateViTri[P]>
  }




  export type ViTriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViTriWhereInput
    orderBy?: ViTriOrderByWithAggregationInput | ViTriOrderByWithAggregationInput[]
    by: ViTriScalarFieldEnum[] | ViTriScalarFieldEnum
    having?: ViTriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViTriCountAggregateInputType | true
    _avg?: ViTriAvgAggregateInputType
    _sum?: ViTriSumAggregateInputType
    _min?: ViTriMinAggregateInputType
    _max?: ViTriMaxAggregateInputType
  }

  export type ViTriGroupByOutputType = {
    id: number
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ViTriCountAggregateOutputType | null
    _avg: ViTriAvgAggregateOutputType | null
    _sum: ViTriSumAggregateOutputType | null
    _min: ViTriMinAggregateOutputType | null
    _max: ViTriMaxAggregateOutputType | null
  }

  type GetViTriGroupByPayload<T extends ViTriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViTriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViTriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViTriGroupByOutputType[P]>
            : GetScalarType<T[P], ViTriGroupByOutputType[P]>
        }
      >
    >


  export type ViTriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ten_vi_tri?: boolean
    tinh_thanh?: boolean
    quoc_gia?: boolean
    hinh_anh?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Phong?: boolean | ViTri$PhongArgs<ExtArgs>
    _count?: boolean | ViTriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viTri"]>



  export type ViTriSelectScalar = {
    id?: boolean
    ten_vi_tri?: boolean
    tinh_thanh?: boolean
    quoc_gia?: boolean
    hinh_anh?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ViTriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ten_vi_tri" | "tinh_thanh" | "quoc_gia" | "hinh_anh" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["viTri"]>
  export type ViTriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phong?: boolean | ViTri$PhongArgs<ExtArgs>
    _count?: boolean | ViTriCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ViTriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViTri"
    objects: {
      Phong: Prisma.$PhongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ten_vi_tri: string
      tinh_thanh: string
      quoc_gia: string
      hinh_anh: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["viTri"]>
    composites: {}
  }

  type ViTriGetPayload<S extends boolean | null | undefined | ViTriDefaultArgs> = $Result.GetResult<Prisma.$ViTriPayload, S>

  type ViTriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViTriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViTriCountAggregateInputType | true
    }

  export interface ViTriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViTri'], meta: { name: 'ViTri' } }
    /**
     * Find zero or one ViTri that matches the filter.
     * @param {ViTriFindUniqueArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViTriFindUniqueArgs>(args: SelectSubset<T, ViTriFindUniqueArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViTri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViTriFindUniqueOrThrowArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViTriFindUniqueOrThrowArgs>(args: SelectSubset<T, ViTriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViTri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindFirstArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViTriFindFirstArgs>(args?: SelectSubset<T, ViTriFindFirstArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViTri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindFirstOrThrowArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViTriFindFirstOrThrowArgs>(args?: SelectSubset<T, ViTriFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViTris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViTris
     * const viTris = await prisma.viTri.findMany()
     * 
     * // Get first 10 ViTris
     * const viTris = await prisma.viTri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viTriWithIdOnly = await prisma.viTri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViTriFindManyArgs>(args?: SelectSubset<T, ViTriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViTri.
     * @param {ViTriCreateArgs} args - Arguments to create a ViTri.
     * @example
     * // Create one ViTri
     * const ViTri = await prisma.viTri.create({
     *   data: {
     *     // ... data to create a ViTri
     *   }
     * })
     * 
     */
    create<T extends ViTriCreateArgs>(args: SelectSubset<T, ViTriCreateArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViTris.
     * @param {ViTriCreateManyArgs} args - Arguments to create many ViTris.
     * @example
     * // Create many ViTris
     * const viTri = await prisma.viTri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViTriCreateManyArgs>(args?: SelectSubset<T, ViTriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViTri.
     * @param {ViTriDeleteArgs} args - Arguments to delete one ViTri.
     * @example
     * // Delete one ViTri
     * const ViTri = await prisma.viTri.delete({
     *   where: {
     *     // ... filter to delete one ViTri
     *   }
     * })
     * 
     */
    delete<T extends ViTriDeleteArgs>(args: SelectSubset<T, ViTriDeleteArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViTri.
     * @param {ViTriUpdateArgs} args - Arguments to update one ViTri.
     * @example
     * // Update one ViTri
     * const viTri = await prisma.viTri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViTriUpdateArgs>(args: SelectSubset<T, ViTriUpdateArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViTris.
     * @param {ViTriDeleteManyArgs} args - Arguments to filter ViTris to delete.
     * @example
     * // Delete a few ViTris
     * const { count } = await prisma.viTri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViTriDeleteManyArgs>(args?: SelectSubset<T, ViTriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViTris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViTris
     * const viTri = await prisma.viTri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViTriUpdateManyArgs>(args: SelectSubset<T, ViTriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViTri.
     * @param {ViTriUpsertArgs} args - Arguments to update or create a ViTri.
     * @example
     * // Update or create a ViTri
     * const viTri = await prisma.viTri.upsert({
     *   create: {
     *     // ... data to create a ViTri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViTri we want to update
     *   }
     * })
     */
    upsert<T extends ViTriUpsertArgs>(args: SelectSubset<T, ViTriUpsertArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViTris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriCountArgs} args - Arguments to filter ViTris to count.
     * @example
     * // Count the number of ViTris
     * const count = await prisma.viTri.count({
     *   where: {
     *     // ... the filter for the ViTris we want to count
     *   }
     * })
    **/
    count<T extends ViTriCountArgs>(
      args?: Subset<T, ViTriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViTriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViTri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViTriAggregateArgs>(args: Subset<T, ViTriAggregateArgs>): Prisma.PrismaPromise<GetViTriAggregateType<T>>

    /**
     * Group by ViTri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViTriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViTriGroupByArgs['orderBy'] }
        : { orderBy?: ViTriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViTriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViTriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViTri model
   */
  readonly fields: ViTriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViTri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViTriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Phong<T extends ViTri$PhongArgs<ExtArgs> = {}>(args?: Subset<T, ViTri$PhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViTri model
   */
  interface ViTriFieldRefs {
    readonly id: FieldRef<"ViTri", 'Int'>
    readonly ten_vi_tri: FieldRef<"ViTri", 'String'>
    readonly tinh_thanh: FieldRef<"ViTri", 'String'>
    readonly quoc_gia: FieldRef<"ViTri", 'String'>
    readonly hinh_anh: FieldRef<"ViTri", 'String'>
    readonly deletedBy: FieldRef<"ViTri", 'Int'>
    readonly isDeleted: FieldRef<"ViTri", 'Boolean'>
    readonly deletedAt: FieldRef<"ViTri", 'DateTime'>
    readonly createdAt: FieldRef<"ViTri", 'DateTime'>
    readonly updatedAt: FieldRef<"ViTri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ViTri findUnique
   */
  export type ViTriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where: ViTriWhereUniqueInput
  }

  /**
   * ViTri findUniqueOrThrow
   */
  export type ViTriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where: ViTriWhereUniqueInput
  }

  /**
   * ViTri findFirst
   */
  export type ViTriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationInput | ViTriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViTris.
     */
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }

  /**
   * ViTri findFirstOrThrow
   */
  export type ViTriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationInput | ViTriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViTris.
     */
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }

  /**
   * ViTri findMany
   */
  export type ViTriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTris to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationInput | ViTriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }

  /**
   * ViTri create
   */
  export type ViTriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The data needed to create a ViTri.
     */
    data: XOR<ViTriCreateInput, ViTriUncheckedCreateInput>
  }

  /**
   * ViTri createMany
   */
  export type ViTriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViTris.
     */
    data: ViTriCreateManyInput | ViTriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViTri update
   */
  export type ViTriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The data needed to update a ViTri.
     */
    data: XOR<ViTriUpdateInput, ViTriUncheckedUpdateInput>
    /**
     * Choose, which ViTri to update.
     */
    where: ViTriWhereUniqueInput
  }

  /**
   * ViTri updateMany
   */
  export type ViTriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViTris.
     */
    data: XOR<ViTriUpdateManyMutationInput, ViTriUncheckedUpdateManyInput>
    /**
     * Filter which ViTris to update
     */
    where?: ViTriWhereInput
    /**
     * Limit how many ViTris to update.
     */
    limit?: number
  }

  /**
   * ViTri upsert
   */
  export type ViTriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The filter to search for the ViTri to update in case it exists.
     */
    where: ViTriWhereUniqueInput
    /**
     * In case the ViTri found by the `where` argument doesn't exist, create a new ViTri with this data.
     */
    create: XOR<ViTriCreateInput, ViTriUncheckedCreateInput>
    /**
     * In case the ViTri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViTriUpdateInput, ViTriUncheckedUpdateInput>
  }

  /**
   * ViTri delete
   */
  export type ViTriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter which ViTri to delete.
     */
    where: ViTriWhereUniqueInput
  }

  /**
   * ViTri deleteMany
   */
  export type ViTriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViTris to delete
     */
    where?: ViTriWhereInput
    /**
     * Limit how many ViTris to delete.
     */
    limit?: number
  }

  /**
   * ViTri.Phong
   */
  export type ViTri$PhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phong
     */
    omit?: PhongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhongInclude<ExtArgs> | null
    where?: PhongWhereInput
    orderBy?: PhongOrderByWithRelationInput | PhongOrderByWithRelationInput[]
    cursor?: PhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }

  /**
   * ViTri without action
   */
  export type ViTriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViTri
     */
    omit?: ViTriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViTriInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BinhLuanScalarFieldEnum: {
    id: 'id',
    ma_phong: 'ma_phong',
    ma_nguoi_binh_luan: 'ma_nguoi_binh_luan',
    ngay_binh_luan: 'ngay_binh_luan',
    noi_dung: 'noi_dung',
    sao_binh_luan: 'sao_binh_luan',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BinhLuanScalarFieldEnum = (typeof BinhLuanScalarFieldEnum)[keyof typeof BinhLuanScalarFieldEnum]


  export const DatPhongScalarFieldEnum: {
    id: 'id',
    ma_phong: 'ma_phong',
    ngay_den: 'ngay_den',
    ngay_di: 'ngay_di',
    so_luong_khach: 'so_luong_khach',
    ma_nguoi_dat: 'ma_nguoi_dat',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DatPhongScalarFieldEnum = (typeof DatPhongScalarFieldEnum)[keyof typeof DatPhongScalarFieldEnum]


  export const GendersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GendersScalarFieldEnum = (typeof GendersScalarFieldEnum)[keyof typeof GendersScalarFieldEnum]


  export const NguoiDungScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    phone: 'phone',
    birthday: 'birthday',
    genderId: 'genderId',
    roleId: 'roleId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NguoiDungScalarFieldEnum = (typeof NguoiDungScalarFieldEnum)[keyof typeof NguoiDungScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    endpoint: 'endpoint',
    method: 'method',
    module: 'module',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const PhongScalarFieldEnum: {
    id: 'id',
    ten_phong: 'ten_phong',
    khach: 'khach',
    phong_ngu: 'phong_ngu',
    giuong: 'giuong',
    phong_tam: 'phong_tam',
    mo_ta: 'mo_ta',
    gia_tien: 'gia_tien',
    may_giat: 'may_giat',
    ban_la: 'ban_la',
    tivi: 'tivi',
    dieu_hoa: 'dieu_hoa',
    wifi: 'wifi',
    bep: 'bep',
    do_xe: 'do_xe',
    ho_boi: 'ho_boi',
    ban_ui: 'ban_ui',
    ma_vi_tri: 'ma_vi_tri',
    hinh_anh: 'hinh_anh',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhongScalarFieldEnum = (typeof PhongScalarFieldEnum)[keyof typeof PhongScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    isActive: 'isActive',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const ViTriScalarFieldEnum: {
    id: 'id',
    ten_vi_tri: 'ten_vi_tri',
    tinh_thanh: 'tinh_thanh',
    quoc_gia: 'quoc_gia',
    hinh_anh: 'hinh_anh',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ViTriScalarFieldEnum = (typeof ViTriScalarFieldEnum)[keyof typeof ViTriScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BinhLuanOrderByRelevanceFieldEnum: {
    noi_dung: 'noi_dung'
  };

  export type BinhLuanOrderByRelevanceFieldEnum = (typeof BinhLuanOrderByRelevanceFieldEnum)[keyof typeof BinhLuanOrderByRelevanceFieldEnum]


  export const GendersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GendersOrderByRelevanceFieldEnum = (typeof GendersOrderByRelevanceFieldEnum)[keyof typeof GendersOrderByRelevanceFieldEnum]


  export const NguoiDungOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    phone: 'phone',
    birthday: 'birthday'
  };

  export type NguoiDungOrderByRelevanceFieldEnum = (typeof NguoiDungOrderByRelevanceFieldEnum)[keyof typeof NguoiDungOrderByRelevanceFieldEnum]


  export const PermissionsOrderByRelevanceFieldEnum: {
    name: 'name',
    endpoint: 'endpoint',
    method: 'method',
    module: 'module'
  };

  export type PermissionsOrderByRelevanceFieldEnum = (typeof PermissionsOrderByRelevanceFieldEnum)[keyof typeof PermissionsOrderByRelevanceFieldEnum]


  export const PhongOrderByRelevanceFieldEnum: {
    ten_phong: 'ten_phong',
    mo_ta: 'mo_ta',
    hinh_anh: 'hinh_anh'
  };

  export type PhongOrderByRelevanceFieldEnum = (typeof PhongOrderByRelevanceFieldEnum)[keyof typeof PhongOrderByRelevanceFieldEnum]


  export const RolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RolesOrderByRelevanceFieldEnum = (typeof RolesOrderByRelevanceFieldEnum)[keyof typeof RolesOrderByRelevanceFieldEnum]


  export const ViTriOrderByRelevanceFieldEnum: {
    ten_vi_tri: 'ten_vi_tri',
    tinh_thanh: 'tinh_thanh',
    quoc_gia: 'quoc_gia',
    hinh_anh: 'hinh_anh'
  };

  export type ViTriOrderByRelevanceFieldEnum = (typeof ViTriOrderByRelevanceFieldEnum)[keyof typeof ViTriOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BinhLuanWhereInput = {
    AND?: BinhLuanWhereInput | BinhLuanWhereInput[]
    OR?: BinhLuanWhereInput[]
    NOT?: BinhLuanWhereInput | BinhLuanWhereInput[]
    id?: IntFilter<"BinhLuan"> | number
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeFilter<"BinhLuan"> | Date | string
    noi_dung?: StringFilter<"BinhLuan"> | string
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
    deletedBy?: IntFilter<"BinhLuan"> | number
    isDeleted?: BoolFilter<"BinhLuan"> | boolean
    deletedAt?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    createdAt?: DateTimeFilter<"BinhLuan"> | Date | string
    updatedAt?: DateTimeFilter<"BinhLuan"> | Date | string
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongScalarRelationFilter, PhongWhereInput>
  }

  export type BinhLuanOrderByWithRelationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    Phong?: PhongOrderByWithRelationInput
    _relevance?: BinhLuanOrderByRelevanceInput
  }

  export type BinhLuanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BinhLuanWhereInput | BinhLuanWhereInput[]
    OR?: BinhLuanWhereInput[]
    NOT?: BinhLuanWhereInput | BinhLuanWhereInput[]
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeFilter<"BinhLuan"> | Date | string
    noi_dung?: StringFilter<"BinhLuan"> | string
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
    deletedBy?: IntFilter<"BinhLuan"> | number
    isDeleted?: BoolFilter<"BinhLuan"> | boolean
    deletedAt?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    createdAt?: DateTimeFilter<"BinhLuan"> | Date | string
    updatedAt?: DateTimeFilter<"BinhLuan"> | Date | string
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongScalarRelationFilter, PhongWhereInput>
  }, "id">

  export type BinhLuanOrderByWithAggregationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BinhLuanCountOrderByAggregateInput
    _avg?: BinhLuanAvgOrderByAggregateInput
    _max?: BinhLuanMaxOrderByAggregateInput
    _min?: BinhLuanMinOrderByAggregateInput
    _sum?: BinhLuanSumOrderByAggregateInput
  }

  export type BinhLuanScalarWhereWithAggregatesInput = {
    AND?: BinhLuanScalarWhereWithAggregatesInput | BinhLuanScalarWhereWithAggregatesInput[]
    OR?: BinhLuanScalarWhereWithAggregatesInput[]
    NOT?: BinhLuanScalarWhereWithAggregatesInput | BinhLuanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BinhLuan"> | number
    ma_phong?: IntWithAggregatesFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntWithAggregatesFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeWithAggregatesFilter<"BinhLuan"> | Date | string
    noi_dung?: StringWithAggregatesFilter<"BinhLuan"> | string
    sao_binh_luan?: IntNullableWithAggregatesFilter<"BinhLuan"> | number | null
    deletedBy?: IntWithAggregatesFilter<"BinhLuan"> | number
    isDeleted?: BoolWithAggregatesFilter<"BinhLuan"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BinhLuan"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BinhLuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BinhLuan"> | Date | string
  }

  export type DatPhongWhereInput = {
    AND?: DatPhongWhereInput | DatPhongWhereInput[]
    OR?: DatPhongWhereInput[]
    NOT?: DatPhongWhereInput | DatPhongWhereInput[]
    id?: IntFilter<"DatPhong"> | number
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeFilter<"DatPhong"> | Date | string
    ngay_di?: DateTimeFilter<"DatPhong"> | Date | string
    so_luong_khach?: IntFilter<"DatPhong"> | number
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
    deletedBy?: IntFilter<"DatPhong"> | number
    isDeleted?: BoolFilter<"DatPhong"> | boolean
    deletedAt?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    createdAt?: DateTimeFilter<"DatPhong"> | Date | string
    updatedAt?: DateTimeFilter<"DatPhong"> | Date | string
    Phong?: XOR<PhongScalarRelationFilter, PhongWhereInput>
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
  }

  export type DatPhongOrderByWithRelationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Phong?: PhongOrderByWithRelationInput
    NguoiDung?: NguoiDungOrderByWithRelationInput
  }

  export type DatPhongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatPhongWhereInput | DatPhongWhereInput[]
    OR?: DatPhongWhereInput[]
    NOT?: DatPhongWhereInput | DatPhongWhereInput[]
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeFilter<"DatPhong"> | Date | string
    ngay_di?: DateTimeFilter<"DatPhong"> | Date | string
    so_luong_khach?: IntFilter<"DatPhong"> | number
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
    deletedBy?: IntFilter<"DatPhong"> | number
    isDeleted?: BoolFilter<"DatPhong"> | boolean
    deletedAt?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    createdAt?: DateTimeFilter<"DatPhong"> | Date | string
    updatedAt?: DateTimeFilter<"DatPhong"> | Date | string
    Phong?: XOR<PhongScalarRelationFilter, PhongWhereInput>
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
  }, "id">

  export type DatPhongOrderByWithAggregationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DatPhongCountOrderByAggregateInput
    _avg?: DatPhongAvgOrderByAggregateInput
    _max?: DatPhongMaxOrderByAggregateInput
    _min?: DatPhongMinOrderByAggregateInput
    _sum?: DatPhongSumOrderByAggregateInput
  }

  export type DatPhongScalarWhereWithAggregatesInput = {
    AND?: DatPhongScalarWhereWithAggregatesInput | DatPhongScalarWhereWithAggregatesInput[]
    OR?: DatPhongScalarWhereWithAggregatesInput[]
    NOT?: DatPhongScalarWhereWithAggregatesInput | DatPhongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DatPhong"> | number
    ma_phong?: IntWithAggregatesFilter<"DatPhong"> | number
    ngay_den?: DateTimeWithAggregatesFilter<"DatPhong"> | Date | string
    ngay_di?: DateTimeWithAggregatesFilter<"DatPhong"> | Date | string
    so_luong_khach?: IntWithAggregatesFilter<"DatPhong"> | number
    ma_nguoi_dat?: IntWithAggregatesFilter<"DatPhong"> | number
    deletedBy?: IntWithAggregatesFilter<"DatPhong"> | number
    isDeleted?: BoolWithAggregatesFilter<"DatPhong"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DatPhong"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DatPhong"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DatPhong"> | Date | string
  }

  export type GendersWhereInput = {
    AND?: GendersWhereInput | GendersWhereInput[]
    OR?: GendersWhereInput[]
    NOT?: GendersWhereInput | GendersWhereInput[]
    id?: IntFilter<"Genders"> | number
    name?: StringNullableFilter<"Genders"> | string | null
    isActive?: BoolNullableFilter<"Genders"> | boolean | null
    deletedBy?: IntFilter<"Genders"> | number
    isDeleted?: BoolFilter<"Genders"> | boolean
    deletedAt?: DateTimeNullableFilter<"Genders"> | Date | string | null
    createdAt?: DateTimeFilter<"Genders"> | Date | string
    updatedAt?: DateTimeFilter<"Genders"> | Date | string
    NguoiDung?: NguoiDungListRelationFilter
  }

  export type GendersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    NguoiDung?: NguoiDungOrderByRelationAggregateInput
    _relevance?: GendersOrderByRelevanceInput
  }

  export type GendersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GendersWhereInput | GendersWhereInput[]
    OR?: GendersWhereInput[]
    NOT?: GendersWhereInput | GendersWhereInput[]
    name?: StringNullableFilter<"Genders"> | string | null
    isActive?: BoolNullableFilter<"Genders"> | boolean | null
    deletedBy?: IntFilter<"Genders"> | number
    isDeleted?: BoolFilter<"Genders"> | boolean
    deletedAt?: DateTimeNullableFilter<"Genders"> | Date | string | null
    createdAt?: DateTimeFilter<"Genders"> | Date | string
    updatedAt?: DateTimeFilter<"Genders"> | Date | string
    NguoiDung?: NguoiDungListRelationFilter
  }, "id">

  export type GendersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GendersCountOrderByAggregateInput
    _avg?: GendersAvgOrderByAggregateInput
    _max?: GendersMaxOrderByAggregateInput
    _min?: GendersMinOrderByAggregateInput
    _sum?: GendersSumOrderByAggregateInput
  }

  export type GendersScalarWhereWithAggregatesInput = {
    AND?: GendersScalarWhereWithAggregatesInput | GendersScalarWhereWithAggregatesInput[]
    OR?: GendersScalarWhereWithAggregatesInput[]
    NOT?: GendersScalarWhereWithAggregatesInput | GendersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genders"> | number
    name?: StringNullableWithAggregatesFilter<"Genders"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Genders"> | boolean | null
    deletedBy?: IntWithAggregatesFilter<"Genders"> | number
    isDeleted?: BoolWithAggregatesFilter<"Genders"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Genders"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Genders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genders"> | Date | string
  }

  export type NguoiDungWhereInput = {
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    id?: IntFilter<"NguoiDung"> | number
    name?: StringFilter<"NguoiDung"> | string
    email?: StringFilter<"NguoiDung"> | string
    password?: StringNullableFilter<"NguoiDung"> | string | null
    avatar?: StringNullableFilter<"NguoiDung"> | string | null
    phone?: StringNullableFilter<"NguoiDung"> | string | null
    birthday?: StringNullableFilter<"NguoiDung"> | string | null
    genderId?: IntFilter<"NguoiDung"> | number
    roleId?: IntFilter<"NguoiDung"> | number
    deletedBy?: IntFilter<"NguoiDung"> | number
    isDeleted?: BoolFilter<"NguoiDung"> | boolean
    deletedAt?: DateTimeNullableFilter<"NguoiDung"> | Date | string | null
    createdAt?: DateTimeFilter<"NguoiDung"> | Date | string
    updatedAt?: DateTimeFilter<"NguoiDung"> | Date | string
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    Genders?: XOR<GendersScalarRelationFilter, GendersWhereInput>
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }

  export type NguoiDungOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BinhLuan?: BinhLuanOrderByRelationAggregateInput
    DatPhong?: DatPhongOrderByRelationAggregateInput
    Genders?: GendersOrderByWithRelationInput
    Roles?: RolesOrderByWithRelationInput
    _relevance?: NguoiDungOrderByRelevanceInput
  }

  export type NguoiDungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    name?: StringFilter<"NguoiDung"> | string
    password?: StringNullableFilter<"NguoiDung"> | string | null
    avatar?: StringNullableFilter<"NguoiDung"> | string | null
    phone?: StringNullableFilter<"NguoiDung"> | string | null
    birthday?: StringNullableFilter<"NguoiDung"> | string | null
    genderId?: IntFilter<"NguoiDung"> | number
    roleId?: IntFilter<"NguoiDung"> | number
    deletedBy?: IntFilter<"NguoiDung"> | number
    isDeleted?: BoolFilter<"NguoiDung"> | boolean
    deletedAt?: DateTimeNullableFilter<"NguoiDung"> | Date | string | null
    createdAt?: DateTimeFilter<"NguoiDung"> | Date | string
    updatedAt?: DateTimeFilter<"NguoiDung"> | Date | string
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    Genders?: XOR<GendersScalarRelationFilter, GendersWhereInput>
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }, "id" | "email">

  export type NguoiDungOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NguoiDungCountOrderByAggregateInput
    _avg?: NguoiDungAvgOrderByAggregateInput
    _max?: NguoiDungMaxOrderByAggregateInput
    _min?: NguoiDungMinOrderByAggregateInput
    _sum?: NguoiDungSumOrderByAggregateInput
  }

  export type NguoiDungScalarWhereWithAggregatesInput = {
    AND?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    OR?: NguoiDungScalarWhereWithAggregatesInput[]
    NOT?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NguoiDung"> | number
    name?: StringWithAggregatesFilter<"NguoiDung"> | string
    email?: StringWithAggregatesFilter<"NguoiDung"> | string
    password?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    phone?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    birthday?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    genderId?: IntWithAggregatesFilter<"NguoiDung"> | number
    roleId?: IntWithAggregatesFilter<"NguoiDung"> | number
    deletedBy?: IntWithAggregatesFilter<"NguoiDung"> | number
    isDeleted?: BoolWithAggregatesFilter<"NguoiDung"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"NguoiDung"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NguoiDung"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NguoiDung"> | Date | string
  }

  export type PermissionsWhereInput = {
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    id?: IntFilter<"Permissions"> | number
    name?: StringFilter<"Permissions"> | string
    endpoint?: StringFilter<"Permissions"> | string
    method?: StringFilter<"Permissions"> | string
    module?: StringFilter<"Permissions"> | string
    deletedBy?: IntFilter<"Permissions"> | number
    isDeleted?: BoolFilter<"Permissions"> | boolean
    deletedAt?: DateTimeFilter<"Permissions"> | Date | string
    createdAt?: DateTimeFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeFilter<"Permissions"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }

  export type PermissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    _relevance?: PermissionsOrderByRelevanceInput
  }

  export type PermissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    name?: StringFilter<"Permissions"> | string
    endpoint?: StringFilter<"Permissions"> | string
    method?: StringFilter<"Permissions"> | string
    module?: StringFilter<"Permissions"> | string
    deletedBy?: IntFilter<"Permissions"> | number
    isDeleted?: BoolFilter<"Permissions"> | boolean
    deletedAt?: DateTimeFilter<"Permissions"> | Date | string
    createdAt?: DateTimeFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeFilter<"Permissions"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }, "id">

  export type PermissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionsCountOrderByAggregateInput
    _avg?: PermissionsAvgOrderByAggregateInput
    _max?: PermissionsMaxOrderByAggregateInput
    _min?: PermissionsMinOrderByAggregateInput
    _sum?: PermissionsSumOrderByAggregateInput
  }

  export type PermissionsScalarWhereWithAggregatesInput = {
    AND?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    OR?: PermissionsScalarWhereWithAggregatesInput[]
    NOT?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permissions"> | number
    name?: StringWithAggregatesFilter<"Permissions"> | string
    endpoint?: StringWithAggregatesFilter<"Permissions"> | string
    method?: StringWithAggregatesFilter<"Permissions"> | string
    module?: StringWithAggregatesFilter<"Permissions"> | string
    deletedBy?: IntWithAggregatesFilter<"Permissions"> | number
    isDeleted?: BoolWithAggregatesFilter<"Permissions"> | boolean
    deletedAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
  }

  export type PhongWhereInput = {
    AND?: PhongWhereInput | PhongWhereInput[]
    OR?: PhongWhereInput[]
    NOT?: PhongWhereInput | PhongWhereInput[]
    id?: IntFilter<"Phong"> | number
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntFilter<"Phong"> | number
    phong_ngu?: IntFilter<"Phong"> | number
    giuong?: IntFilter<"Phong"> | number
    phong_tam?: IntFilter<"Phong"> | number
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntFilter<"Phong"> | number
    may_giat?: BoolFilter<"Phong"> | boolean
    ban_la?: BoolFilter<"Phong"> | boolean
    tivi?: BoolFilter<"Phong"> | boolean
    dieu_hoa?: BoolFilter<"Phong"> | boolean
    wifi?: BoolFilter<"Phong"> | boolean
    bep?: BoolFilter<"Phong"> | boolean
    do_xe?: BoolFilter<"Phong"> | boolean
    ho_boi?: BoolFilter<"Phong"> | boolean
    ban_ui?: BoolFilter<"Phong"> | boolean
    ma_vi_tri?: IntFilter<"Phong"> | number
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    deletedBy?: IntFilter<"Phong"> | number
    isDeleted?: BoolFilter<"Phong"> | boolean
    deletedAt?: DateTimeNullableFilter<"Phong"> | Date | string | null
    createdAt?: DateTimeFilter<"Phong"> | Date | string
    updatedAt?: DateTimeFilter<"Phong"> | Date | string
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    ViTri?: XOR<ViTriScalarRelationFilter, ViTriWhereInput>
  }

  export type PhongOrderByWithRelationInput = {
    id?: SortOrder
    ten_phong?: SortOrderInput | SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    ma_vi_tri?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BinhLuan?: BinhLuanOrderByRelationAggregateInput
    DatPhong?: DatPhongOrderByRelationAggregateInput
    ViTri?: ViTriOrderByWithRelationInput
    _relevance?: PhongOrderByRelevanceInput
  }

  export type PhongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhongWhereInput | PhongWhereInput[]
    OR?: PhongWhereInput[]
    NOT?: PhongWhereInput | PhongWhereInput[]
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntFilter<"Phong"> | number
    phong_ngu?: IntFilter<"Phong"> | number
    giuong?: IntFilter<"Phong"> | number
    phong_tam?: IntFilter<"Phong"> | number
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntFilter<"Phong"> | number
    may_giat?: BoolFilter<"Phong"> | boolean
    ban_la?: BoolFilter<"Phong"> | boolean
    tivi?: BoolFilter<"Phong"> | boolean
    dieu_hoa?: BoolFilter<"Phong"> | boolean
    wifi?: BoolFilter<"Phong"> | boolean
    bep?: BoolFilter<"Phong"> | boolean
    do_xe?: BoolFilter<"Phong"> | boolean
    ho_boi?: BoolFilter<"Phong"> | boolean
    ban_ui?: BoolFilter<"Phong"> | boolean
    ma_vi_tri?: IntFilter<"Phong"> | number
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    deletedBy?: IntFilter<"Phong"> | number
    isDeleted?: BoolFilter<"Phong"> | boolean
    deletedAt?: DateTimeNullableFilter<"Phong"> | Date | string | null
    createdAt?: DateTimeFilter<"Phong"> | Date | string
    updatedAt?: DateTimeFilter<"Phong"> | Date | string
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    ViTri?: XOR<ViTriScalarRelationFilter, ViTriWhereInput>
  }, "id">

  export type PhongOrderByWithAggregationInput = {
    id?: SortOrder
    ten_phong?: SortOrderInput | SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    ma_vi_tri?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhongCountOrderByAggregateInput
    _avg?: PhongAvgOrderByAggregateInput
    _max?: PhongMaxOrderByAggregateInput
    _min?: PhongMinOrderByAggregateInput
    _sum?: PhongSumOrderByAggregateInput
  }

  export type PhongScalarWhereWithAggregatesInput = {
    AND?: PhongScalarWhereWithAggregatesInput | PhongScalarWhereWithAggregatesInput[]
    OR?: PhongScalarWhereWithAggregatesInput[]
    NOT?: PhongScalarWhereWithAggregatesInput | PhongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Phong"> | number
    ten_phong?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    khach?: IntWithAggregatesFilter<"Phong"> | number
    phong_ngu?: IntWithAggregatesFilter<"Phong"> | number
    giuong?: IntWithAggregatesFilter<"Phong"> | number
    phong_tam?: IntWithAggregatesFilter<"Phong"> | number
    mo_ta?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    gia_tien?: IntWithAggregatesFilter<"Phong"> | number
    may_giat?: BoolWithAggregatesFilter<"Phong"> | boolean
    ban_la?: BoolWithAggregatesFilter<"Phong"> | boolean
    tivi?: BoolWithAggregatesFilter<"Phong"> | boolean
    dieu_hoa?: BoolWithAggregatesFilter<"Phong"> | boolean
    wifi?: BoolWithAggregatesFilter<"Phong"> | boolean
    bep?: BoolWithAggregatesFilter<"Phong"> | boolean
    do_xe?: BoolWithAggregatesFilter<"Phong"> | boolean
    ho_boi?: BoolWithAggregatesFilter<"Phong"> | boolean
    ban_ui?: BoolWithAggregatesFilter<"Phong"> | boolean
    ma_vi_tri?: IntWithAggregatesFilter<"Phong"> | number
    hinh_anh?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Phong"> | number
    isDeleted?: BoolWithAggregatesFilter<"Phong"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Phong"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Phong"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Phong"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Permissions?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Roles?: RolesOrderByWithRelationInput
    Permissions?: PermissionsOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Permissions?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }, "id">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    isActive?: BoolNullableWithAggregatesFilter<"RolePermission"> | boolean | null
    deletedBy?: IntWithAggregatesFilter<"RolePermission"> | number
    isDeleted?: BoolWithAggregatesFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringNullableFilter<"Roles"> | string | null
    description?: StringNullableFilter<"Roles"> | string | null
    isActive?: BoolNullableFilter<"Roles"> | boolean | null
    deletedBy?: IntFilter<"Roles"> | number
    isDeleted?: BoolFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    NguoiDung?: NguoiDungListRelationFilter
    RolePermission?: RolePermissionListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    NguoiDung?: NguoiDungOrderByRelationAggregateInput
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    _relevance?: RolesOrderByRelevanceInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: StringNullableFilter<"Roles"> | string | null
    description?: StringNullableFilter<"Roles"> | string | null
    isActive?: BoolNullableFilter<"Roles"> | boolean | null
    deletedBy?: IntFilter<"Roles"> | number
    isDeleted?: BoolFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    NguoiDung?: NguoiDungListRelationFilter
    RolePermission?: RolePermissionListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    description?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Roles"> | boolean | null
    deletedBy?: IntWithAggregatesFilter<"Roles"> | number
    isDeleted?: BoolWithAggregatesFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type ViTriWhereInput = {
    AND?: ViTriWhereInput | ViTriWhereInput[]
    OR?: ViTriWhereInput[]
    NOT?: ViTriWhereInput | ViTriWhereInput[]
    id?: IntFilter<"ViTri"> | number
    ten_vi_tri?: StringFilter<"ViTri"> | string
    tinh_thanh?: StringFilter<"ViTri"> | string
    quoc_gia?: StringFilter<"ViTri"> | string
    hinh_anh?: StringNullableFilter<"ViTri"> | string | null
    deletedBy?: IntFilter<"ViTri"> | number
    isDeleted?: BoolFilter<"ViTri"> | boolean
    deletedAt?: DateTimeNullableFilter<"ViTri"> | Date | string | null
    createdAt?: DateTimeFilter<"ViTri"> | Date | string
    updatedAt?: DateTimeFilter<"ViTri"> | Date | string
    Phong?: PhongListRelationFilter
  }

  export type ViTriOrderByWithRelationInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Phong?: PhongOrderByRelationAggregateInput
    _relevance?: ViTriOrderByRelevanceInput
  }

  export type ViTriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViTriWhereInput | ViTriWhereInput[]
    OR?: ViTriWhereInput[]
    NOT?: ViTriWhereInput | ViTriWhereInput[]
    ten_vi_tri?: StringFilter<"ViTri"> | string
    tinh_thanh?: StringFilter<"ViTri"> | string
    quoc_gia?: StringFilter<"ViTri"> | string
    hinh_anh?: StringNullableFilter<"ViTri"> | string | null
    deletedBy?: IntFilter<"ViTri"> | number
    isDeleted?: BoolFilter<"ViTri"> | boolean
    deletedAt?: DateTimeNullableFilter<"ViTri"> | Date | string | null
    createdAt?: DateTimeFilter<"ViTri"> | Date | string
    updatedAt?: DateTimeFilter<"ViTri"> | Date | string
    Phong?: PhongListRelationFilter
  }, "id">

  export type ViTriOrderByWithAggregationInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ViTriCountOrderByAggregateInput
    _avg?: ViTriAvgOrderByAggregateInput
    _max?: ViTriMaxOrderByAggregateInput
    _min?: ViTriMinOrderByAggregateInput
    _sum?: ViTriSumOrderByAggregateInput
  }

  export type ViTriScalarWhereWithAggregatesInput = {
    AND?: ViTriScalarWhereWithAggregatesInput | ViTriScalarWhereWithAggregatesInput[]
    OR?: ViTriScalarWhereWithAggregatesInput[]
    NOT?: ViTriScalarWhereWithAggregatesInput | ViTriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViTri"> | number
    ten_vi_tri?: StringWithAggregatesFilter<"ViTri"> | string
    tinh_thanh?: StringWithAggregatesFilter<"ViTri"> | string
    quoc_gia?: StringWithAggregatesFilter<"ViTri"> | string
    hinh_anh?: StringNullableWithAggregatesFilter<"ViTri"> | string | null
    deletedBy?: IntWithAggregatesFilter<"ViTri"> | number
    isDeleted?: BoolWithAggregatesFilter<"ViTri"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ViTri"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ViTri"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ViTri"> | Date | string
  }

  export type BinhLuanCreateInput = {
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung: NguoiDungCreateNestedOneWithoutBinhLuanInput
    Phong: PhongCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateInput = {
    id?: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanUpdateInput = {
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput
    Phong?: PhongUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanCreateManyInput = {
    id?: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanUpdateManyMutationInput = {
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongCreateInput = {
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Phong: PhongCreateNestedOneWithoutDatPhongInput
    NguoiDung: NguoiDungCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateInput = {
    id?: number
    ma_phong: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongUpdateInput = {
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Phong?: PhongUpdateOneRequiredWithoutDatPhongNestedInput
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongCreateManyInput = {
    id?: number
    ma_phong: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongUpdateManyMutationInput = {
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GendersCreateInput = {
    name?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungCreateNestedManyWithoutGendersInput
  }

  export type GendersUncheckedCreateInput = {
    id?: number
    name?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungUncheckedCreateNestedManyWithoutGendersInput
  }

  export type GendersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateManyWithoutGendersNestedInput
  }

  export type GendersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUncheckedUpdateManyWithoutGendersNestedInput
  }

  export type GendersCreateManyInput = {
    id?: number
    name?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GendersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GendersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NguoiDungCreateInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
    Genders: GendersCreateNestedOneWithoutNguoiDungInput
    Roles?: RolesCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
    Genders?: GendersUpdateOneRequiredWithoutNguoiDungNestedInput
    Roles?: RolesUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NguoiDungUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NguoiDungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsCreateInput = {
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionsUncheckedCreateInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionsCreateManyInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhongCreateInput = {
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri: number
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongUpdateInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type PhongCreateManyInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri: number
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhongUpdateManyMutationInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Roles: RolesCreateNestedOneWithoutRolePermissionInput
    Permissions: PermissionsCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RolesUpdateOneRequiredWithoutRolePermissionNestedInput
    Permissions?: PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    roleId: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungCreateNestedManyWithoutRolesInput
    RolePermission?: RolePermissionCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungUncheckedCreateNestedManyWithoutRolesInput
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateManyWithoutRolesNestedInput
    RolePermission?: RolePermissionUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUncheckedUpdateManyWithoutRolesNestedInput
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViTriCreateInput = {
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Phong?: PhongCreateNestedManyWithoutViTriInput
  }

  export type ViTriUncheckedCreateInput = {
    id?: number
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Phong?: PhongUncheckedCreateNestedManyWithoutViTriInput
  }

  export type ViTriUpdateInput = {
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Phong?: PhongUpdateManyWithoutViTriNestedInput
  }

  export type ViTriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Phong?: PhongUncheckedUpdateManyWithoutViTriNestedInput
  }

  export type ViTriCreateManyInput = {
    id?: number
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViTriUpdateManyMutationInput = {
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViTriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NguoiDungScalarRelationFilter = {
    is?: NguoiDungWhereInput
    isNot?: NguoiDungWhereInput
  }

  export type PhongScalarRelationFilter = {
    is?: PhongWhereInput
    isNot?: PhongWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BinhLuanOrderByRelevanceInput = {
    fields: BinhLuanOrderByRelevanceFieldEnum | BinhLuanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BinhLuanCountOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinhLuanAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    sao_binh_luan?: SortOrder
    deletedBy?: SortOrder
  }

  export type BinhLuanMaxOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinhLuanMinOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinhLuanSumOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    sao_binh_luan?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DatPhongCountOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatPhongAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
  }

  export type DatPhongMaxOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatPhongMinOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatPhongSumOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NguoiDungListRelationFilter = {
    every?: NguoiDungWhereInput
    some?: NguoiDungWhereInput
    none?: NguoiDungWhereInput
  }

  export type NguoiDungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GendersOrderByRelevanceInput = {
    fields: GendersOrderByRelevanceFieldEnum | GendersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GendersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GendersAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type GendersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GendersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GendersSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BinhLuanListRelationFilter = {
    every?: BinhLuanWhereInput
    some?: BinhLuanWhereInput
    none?: BinhLuanWhereInput
  }

  export type DatPhongListRelationFilter = {
    every?: DatPhongWhereInput
    some?: DatPhongWhereInput
    none?: DatPhongWhereInput
  }

  export type GendersScalarRelationFilter = {
    is?: GendersWhereInput
    isNot?: GendersWhereInput
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type BinhLuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatPhongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NguoiDungOrderByRelevanceInput = {
    fields: NguoiDungOrderByRelevanceFieldEnum | NguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NguoiDungCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NguoiDungAvgOrderByAggregateInput = {
    id?: SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
  }

  export type NguoiDungMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NguoiDungMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NguoiDungSumOrderByAggregateInput = {
    id?: SortOrder
    genderId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionsOrderByRelevanceInput = {
    fields: PermissionsOrderByRelevanceFieldEnum | PermissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type ViTriScalarRelationFilter = {
    is?: ViTriWhereInput
    isNot?: ViTriWhereInput
  }

  export type PhongOrderByRelevanceInput = {
    fields: PhongOrderByRelevanceFieldEnum | PhongOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhongCountOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    ma_vi_tri?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhongAvgOrderByAggregateInput = {
    id?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    gia_tien?: SortOrder
    ma_vi_tri?: SortOrder
    deletedBy?: SortOrder
  }

  export type PhongMaxOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    ma_vi_tri?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhongMinOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    ma_vi_tri?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhongSumOrderByAggregateInput = {
    id?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    gia_tien?: SortOrder
    ma_vi_tri?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionsScalarRelationFilter = {
    is?: PermissionsWhereInput
    isNot?: PermissionsWhereInput
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolesOrderByRelevanceInput = {
    fields: RolesOrderByRelevanceFieldEnum | RolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type PhongListRelationFilter = {
    every?: PhongWhereInput
    some?: PhongWhereInput
    none?: PhongWhereInput
  }

  export type PhongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViTriOrderByRelevanceInput = {
    fields: ViTriOrderByRelevanceFieldEnum | ViTriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ViTriCountOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViTriAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type ViTriMaxOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViTriMinOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViTriSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type NguoiDungCreateNestedOneWithoutBinhLuanInput = {
    create?: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutBinhLuanInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type PhongCreateNestedOneWithoutBinhLuanInput = {
    create?: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: PhongCreateOrConnectWithoutBinhLuanInput
    connect?: PhongWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput = {
    create?: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutBinhLuanInput
    upsert?: NguoiDungUpsertWithoutBinhLuanInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutBinhLuanInput, NguoiDungUpdateWithoutBinhLuanInput>, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
  }

  export type PhongUpdateOneRequiredWithoutBinhLuanNestedInput = {
    create?: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: PhongCreateOrConnectWithoutBinhLuanInput
    upsert?: PhongUpsertWithoutBinhLuanInput
    connect?: PhongWhereUniqueInput
    update?: XOR<XOR<PhongUpdateToOneWithWhereWithoutBinhLuanInput, PhongUpdateWithoutBinhLuanInput>, PhongUncheckedUpdateWithoutBinhLuanInput>
  }

  export type PhongCreateNestedOneWithoutDatPhongInput = {
    create?: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: PhongCreateOrConnectWithoutDatPhongInput
    connect?: PhongWhereUniqueInput
  }

  export type NguoiDungCreateNestedOneWithoutDatPhongInput = {
    create?: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatPhongInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type PhongUpdateOneRequiredWithoutDatPhongNestedInput = {
    create?: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: PhongCreateOrConnectWithoutDatPhongInput
    upsert?: PhongUpsertWithoutDatPhongInput
    connect?: PhongWhereUniqueInput
    update?: XOR<XOR<PhongUpdateToOneWithWhereWithoutDatPhongInput, PhongUpdateWithoutDatPhongInput>, PhongUncheckedUpdateWithoutDatPhongInput>
  }

  export type NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput = {
    create?: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatPhongInput
    upsert?: NguoiDungUpsertWithoutDatPhongInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutDatPhongInput, NguoiDungUpdateWithoutDatPhongInput>, NguoiDungUncheckedUpdateWithoutDatPhongInput>
  }

  export type NguoiDungCreateNestedManyWithoutGendersInput = {
    create?: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput> | NguoiDungCreateWithoutGendersInput[] | NguoiDungUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGendersInput | NguoiDungCreateOrConnectWithoutGendersInput[]
    createMany?: NguoiDungCreateManyGendersInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type NguoiDungUncheckedCreateNestedManyWithoutGendersInput = {
    create?: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput> | NguoiDungCreateWithoutGendersInput[] | NguoiDungUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGendersInput | NguoiDungCreateOrConnectWithoutGendersInput[]
    createMany?: NguoiDungCreateManyGendersInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NguoiDungUpdateManyWithoutGendersNestedInput = {
    create?: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput> | NguoiDungCreateWithoutGendersInput[] | NguoiDungUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGendersInput | NguoiDungCreateOrConnectWithoutGendersInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutGendersInput | NguoiDungUpsertWithWhereUniqueWithoutGendersInput[]
    createMany?: NguoiDungCreateManyGendersInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutGendersInput | NguoiDungUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutGendersInput | NguoiDungUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type NguoiDungUncheckedUpdateManyWithoutGendersNestedInput = {
    create?: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput> | NguoiDungCreateWithoutGendersInput[] | NguoiDungUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGendersInput | NguoiDungCreateOrConnectWithoutGendersInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutGendersInput | NguoiDungUpsertWithWhereUniqueWithoutGendersInput[]
    createMany?: NguoiDungCreateManyGendersInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutGendersInput | NguoiDungUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutGendersInput | NguoiDungUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type BinhLuanCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type GendersCreateNestedOneWithoutNguoiDungInput = {
    create?: XOR<GendersCreateWithoutNguoiDungInput, GendersUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: GendersCreateOrConnectWithoutNguoiDungInput
    connect?: GendersWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutNguoiDungInput = {
    create?: XOR<RolesCreateWithoutNguoiDungInput, RolesUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: RolesCreateOrConnectWithoutNguoiDungInput
    connect?: RolesWhereUniqueInput
  }

  export type BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type BinhLuanUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutNguoiDungInput | BinhLuanUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput | DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput | DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutNguoiDungInput | DatPhongUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type GendersUpdateOneRequiredWithoutNguoiDungNestedInput = {
    create?: XOR<GendersCreateWithoutNguoiDungInput, GendersUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: GendersCreateOrConnectWithoutNguoiDungInput
    upsert?: GendersUpsertWithoutNguoiDungInput
    connect?: GendersWhereUniqueInput
    update?: XOR<XOR<GendersUpdateToOneWithWhereWithoutNguoiDungInput, GendersUpdateWithoutNguoiDungInput>, GendersUncheckedUpdateWithoutNguoiDungInput>
  }

  export type RolesUpdateOneRequiredWithoutNguoiDungNestedInput = {
    create?: XOR<RolesCreateWithoutNguoiDungInput, RolesUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: RolesCreateOrConnectWithoutNguoiDungInput
    upsert?: RolesUpsertWithoutNguoiDungInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutNguoiDungInput, RolesUpdateWithoutNguoiDungInput>, RolesUncheckedUpdateWithoutNguoiDungInput>
  }

  export type BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutNguoiDungInput | BinhLuanUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput | DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput | DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutNguoiDungInput | DatPhongUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionsInput | RolePermissionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionsInput | RolePermissionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type BinhLuanCreateNestedManyWithoutPhongInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongCreateNestedManyWithoutPhongInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type ViTriCreateNestedOneWithoutPhongInput = {
    create?: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    connectOrCreate?: ViTriCreateOrConnectWithoutPhongInput
    connect?: ViTriWhereUniqueInput
  }

  export type BinhLuanUncheckedCreateNestedManyWithoutPhongInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongUncheckedCreateNestedManyWithoutPhongInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type BinhLuanUpdateManyWithoutPhongNestedInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutPhongInput | BinhLuanUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutPhongInput | BinhLuanUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutPhongInput | BinhLuanUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUpdateManyWithoutPhongNestedInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutPhongInput | DatPhongUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutPhongInput | DatPhongUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutPhongInput | DatPhongUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type ViTriUpdateOneRequiredWithoutPhongNestedInput = {
    create?: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    connectOrCreate?: ViTriCreateOrConnectWithoutPhongInput
    upsert?: ViTriUpsertWithoutPhongInput
    connect?: ViTriWhereUniqueInput
    update?: XOR<XOR<ViTriUpdateToOneWithWhereWithoutPhongInput, ViTriUpdateWithoutPhongInput>, ViTriUncheckedUpdateWithoutPhongInput>
  }

  export type BinhLuanUncheckedUpdateManyWithoutPhongNestedInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutPhongInput | BinhLuanUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutPhongInput | BinhLuanUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutPhongInput | BinhLuanUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUncheckedUpdateManyWithoutPhongNestedInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutPhongInput | DatPhongUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutPhongInput | DatPhongUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutPhongInput | DatPhongUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type RolesCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolePermissionInput
    connect?: RolesWhereUniqueInput
  }

  export type PermissionsCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolePermissionInput
    connect?: PermissionsWhereUniqueInput
  }

  export type RolesUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolePermissionInput
    upsert?: RolesUpsertWithoutRolePermissionInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutRolePermissionInput, RolesUpdateWithoutRolePermissionInput>, RolesUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolePermissionInput
    upsert?: PermissionsUpsertWithoutRolePermissionInput
    connect?: PermissionsWhereUniqueInput
    update?: XOR<XOR<PermissionsUpdateToOneWithWhereWithoutRolePermissionInput, PermissionsUpdateWithoutRolePermissionInput>, PermissionsUncheckedUpdateWithoutRolePermissionInput>
  }

  export type NguoiDungCreateNestedManyWithoutRolesInput = {
    create?: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput> | NguoiDungCreateWithoutRolesInput[] | NguoiDungUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRolesInput | NguoiDungCreateOrConnectWithoutRolesInput[]
    createMany?: NguoiDungCreateManyRolesInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type NguoiDungUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput> | NguoiDungCreateWithoutRolesInput[] | NguoiDungUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRolesInput | NguoiDungCreateOrConnectWithoutRolesInput[]
    createMany?: NguoiDungCreateManyRolesInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type NguoiDungUpdateManyWithoutRolesNestedInput = {
    create?: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput> | NguoiDungCreateWithoutRolesInput[] | NguoiDungUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRolesInput | NguoiDungCreateOrConnectWithoutRolesInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutRolesInput | NguoiDungUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: NguoiDungCreateManyRolesInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutRolesInput | NguoiDungUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutRolesInput | NguoiDungUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type RolePermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRolesInput | RolePermissionUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRolesInput | RolePermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRolesInput | RolePermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type NguoiDungUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput> | NguoiDungCreateWithoutRolesInput[] | NguoiDungUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRolesInput | NguoiDungCreateOrConnectWithoutRolesInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutRolesInput | NguoiDungUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: NguoiDungCreateManyRolesInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutRolesInput | NguoiDungUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutRolesInput | NguoiDungUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRolesInput | RolePermissionUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRolesInput | RolePermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRolesInput | RolePermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type PhongCreateNestedManyWithoutViTriInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
  }

  export type PhongUncheckedCreateNestedManyWithoutViTriInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
  }

  export type PhongUpdateManyWithoutViTriNestedInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    upsert?: PhongUpsertWithWhereUniqueWithoutViTriInput | PhongUpsertWithWhereUniqueWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    set?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    disconnect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    delete?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    update?: PhongUpdateWithWhereUniqueWithoutViTriInput | PhongUpdateWithWhereUniqueWithoutViTriInput[]
    updateMany?: PhongUpdateManyWithWhereWithoutViTriInput | PhongUpdateManyWithWhereWithoutViTriInput[]
    deleteMany?: PhongScalarWhereInput | PhongScalarWhereInput[]
  }

  export type PhongUncheckedUpdateManyWithoutViTriNestedInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    upsert?: PhongUpsertWithWhereUniqueWithoutViTriInput | PhongUpsertWithWhereUniqueWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    set?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    disconnect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    delete?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    update?: PhongUpdateWithWhereUniqueWithoutViTriInput | PhongUpdateWithWhereUniqueWithoutViTriInput[]
    updateMany?: PhongUpdateManyWithWhereWithoutViTriInput | PhongUpdateManyWithWhereWithoutViTriInput[]
    deleteMany?: PhongScalarWhereInput | PhongScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NguoiDungCreateWithoutBinhLuanInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
    Genders: GendersCreateNestedOneWithoutNguoiDungInput
    Roles?: RolesCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutBinhLuanInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutBinhLuanInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
  }

  export type PhongCreateWithoutBinhLuanInput = {
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutBinhLuanInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri: number
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutBinhLuanInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
  }

  export type NguoiDungUpsertWithoutBinhLuanInput = {
    update: XOR<NguoiDungUpdateWithoutBinhLuanInput, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
    create: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutBinhLuanInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutBinhLuanInput, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
  }

  export type NguoiDungUpdateWithoutBinhLuanInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
    Genders?: GendersUpdateOneRequiredWithoutNguoiDungNestedInput
    Roles?: RolesUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutBinhLuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type PhongUpsertWithoutBinhLuanInput = {
    update: XOR<PhongUpdateWithoutBinhLuanInput, PhongUncheckedUpdateWithoutBinhLuanInput>
    create: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    where?: PhongWhereInput
  }

  export type PhongUpdateToOneWithWhereWithoutBinhLuanInput = {
    where?: PhongWhereInput
    data: XOR<PhongUpdateWithoutBinhLuanInput, PhongUncheckedUpdateWithoutBinhLuanInput>
  }

  export type PhongUpdateWithoutBinhLuanInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutBinhLuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type PhongCreateWithoutDatPhongInput = {
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutDatPhongInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    ma_vi_tri: number
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutDatPhongInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
  }

  export type NguoiDungCreateWithoutDatPhongInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
    Genders: GendersCreateNestedOneWithoutNguoiDungInput
    Roles?: RolesCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutDatPhongInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutDatPhongInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
  }

  export type PhongUpsertWithoutDatPhongInput = {
    update: XOR<PhongUpdateWithoutDatPhongInput, PhongUncheckedUpdateWithoutDatPhongInput>
    create: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    where?: PhongWhereInput
  }

  export type PhongUpdateToOneWithWhereWithoutDatPhongInput = {
    where?: PhongWhereInput
    data: XOR<PhongUpdateWithoutDatPhongInput, PhongUncheckedUpdateWithoutDatPhongInput>
  }

  export type PhongUpdateWithoutDatPhongInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutDatPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type NguoiDungUpsertWithoutDatPhongInput = {
    update: XOR<NguoiDungUpdateWithoutDatPhongInput, NguoiDungUncheckedUpdateWithoutDatPhongInput>
    create: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutDatPhongInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutDatPhongInput, NguoiDungUncheckedUpdateWithoutDatPhongInput>
  }

  export type NguoiDungUpdateWithoutDatPhongInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
    Genders?: GendersUpdateOneRequiredWithoutNguoiDungNestedInput
    Roles?: RolesUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutDatPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateWithoutGendersInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
    Roles?: RolesCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutGendersInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutGendersInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput>
  }

  export type NguoiDungCreateManyGendersInputEnvelope = {
    data: NguoiDungCreateManyGendersInput | NguoiDungCreateManyGendersInput[]
    skipDuplicates?: boolean
  }

  export type NguoiDungUpsertWithWhereUniqueWithoutGendersInput = {
    where: NguoiDungWhereUniqueInput
    update: XOR<NguoiDungUpdateWithoutGendersInput, NguoiDungUncheckedUpdateWithoutGendersInput>
    create: XOR<NguoiDungCreateWithoutGendersInput, NguoiDungUncheckedCreateWithoutGendersInput>
  }

  export type NguoiDungUpdateWithWhereUniqueWithoutGendersInput = {
    where: NguoiDungWhereUniqueInput
    data: XOR<NguoiDungUpdateWithoutGendersInput, NguoiDungUncheckedUpdateWithoutGendersInput>
  }

  export type NguoiDungUpdateManyWithWhereWithoutGendersInput = {
    where: NguoiDungScalarWhereInput
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyWithoutGendersInput>
  }

  export type NguoiDungScalarWhereInput = {
    AND?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
    OR?: NguoiDungScalarWhereInput[]
    NOT?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
    id?: IntFilter<"NguoiDung"> | number
    name?: StringFilter<"NguoiDung"> | string
    email?: StringFilter<"NguoiDung"> | string
    password?: StringNullableFilter<"NguoiDung"> | string | null
    avatar?: StringNullableFilter<"NguoiDung"> | string | null
    phone?: StringNullableFilter<"NguoiDung"> | string | null
    birthday?: StringNullableFilter<"NguoiDung"> | string | null
    genderId?: IntFilter<"NguoiDung"> | number
    roleId?: IntFilter<"NguoiDung"> | number
    deletedBy?: IntFilter<"NguoiDung"> | number
    isDeleted?: BoolFilter<"NguoiDung"> | boolean
    deletedAt?: DateTimeNullableFilter<"NguoiDung"> | Date | string | null
    createdAt?: DateTimeFilter<"NguoiDung"> | Date | string
    updatedAt?: DateTimeFilter<"NguoiDung"> | Date | string
  }

  export type BinhLuanCreateWithoutNguoiDungInput = {
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Phong: PhongCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanCreateOrConnectWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    create: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput>
  }

  export type BinhLuanCreateManyNguoiDungInputEnvelope = {
    data: BinhLuanCreateManyNguoiDungInput | BinhLuanCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type DatPhongCreateWithoutNguoiDungInput = {
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Phong: PhongCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongCreateOrConnectWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    create: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatPhongCreateManyNguoiDungInputEnvelope = {
    data: DatPhongCreateManyNguoiDungInput | DatPhongCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type GendersCreateWithoutNguoiDungInput = {
    name?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GendersUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    name?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GendersCreateOrConnectWithoutNguoiDungInput = {
    where: GendersWhereUniqueInput
    create: XOR<GendersCreateWithoutNguoiDungInput, GendersUncheckedCreateWithoutNguoiDungInput>
  }

  export type RolesCreateWithoutNguoiDungInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesCreateOrConnectWithoutNguoiDungInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutNguoiDungInput, RolesUncheckedCreateWithoutNguoiDungInput>
  }

  export type BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    update: XOR<BinhLuanUpdateWithoutNguoiDungInput, BinhLuanUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput>
  }

  export type BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    data: XOR<BinhLuanUpdateWithoutNguoiDungInput, BinhLuanUncheckedUpdateWithoutNguoiDungInput>
  }

  export type BinhLuanUpdateManyWithWhereWithoutNguoiDungInput = {
    where: BinhLuanScalarWhereInput
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type BinhLuanScalarWhereInput = {
    AND?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
    OR?: BinhLuanScalarWhereInput[]
    NOT?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
    id?: IntFilter<"BinhLuan"> | number
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeFilter<"BinhLuan"> | Date | string
    noi_dung?: StringFilter<"BinhLuan"> | string
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
    deletedBy?: IntFilter<"BinhLuan"> | number
    isDeleted?: BoolFilter<"BinhLuan"> | boolean
    deletedAt?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    createdAt?: DateTimeFilter<"BinhLuan"> | Date | string
    updatedAt?: DateTimeFilter<"BinhLuan"> | Date | string
  }

  export type DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    update: XOR<DatPhongUpdateWithoutNguoiDungInput, DatPhongUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    data: XOR<DatPhongUpdateWithoutNguoiDungInput, DatPhongUncheckedUpdateWithoutNguoiDungInput>
  }

  export type DatPhongUpdateManyWithWhereWithoutNguoiDungInput = {
    where: DatPhongScalarWhereInput
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type DatPhongScalarWhereInput = {
    AND?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
    OR?: DatPhongScalarWhereInput[]
    NOT?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
    id?: IntFilter<"DatPhong"> | number
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeFilter<"DatPhong"> | Date | string
    ngay_di?: DateTimeFilter<"DatPhong"> | Date | string
    so_luong_khach?: IntFilter<"DatPhong"> | number
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
    deletedBy?: IntFilter<"DatPhong"> | number
    isDeleted?: BoolFilter<"DatPhong"> | boolean
    deletedAt?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    createdAt?: DateTimeFilter<"DatPhong"> | Date | string
    updatedAt?: DateTimeFilter<"DatPhong"> | Date | string
  }

  export type GendersUpsertWithoutNguoiDungInput = {
    update: XOR<GendersUpdateWithoutNguoiDungInput, GendersUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<GendersCreateWithoutNguoiDungInput, GendersUncheckedCreateWithoutNguoiDungInput>
    where?: GendersWhereInput
  }

  export type GendersUpdateToOneWithWhereWithoutNguoiDungInput = {
    where?: GendersWhereInput
    data: XOR<GendersUpdateWithoutNguoiDungInput, GendersUncheckedUpdateWithoutNguoiDungInput>
  }

  export type GendersUpdateWithoutNguoiDungInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GendersUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUpsertWithoutNguoiDungInput = {
    update: XOR<RolesUpdateWithoutNguoiDungInput, RolesUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<RolesCreateWithoutNguoiDungInput, RolesUncheckedCreateWithoutNguoiDungInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutNguoiDungInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutNguoiDungInput, RolesUncheckedUpdateWithoutNguoiDungInput>
  }

  export type RolesUpdateWithoutNguoiDungInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RolePermissionCreateWithoutPermissionsInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Roles: RolesCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionsInput = {
    id?: number
    roleId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput>
  }

  export type RolePermissionCreateManyPermissionsInputEnvelope = {
    data: RolePermissionCreateManyPermissionsInput | RolePermissionCreateManyPermissionsInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionsInput, RolePermissionUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionsInput, RolePermissionUncheckedUpdateWithoutPermissionsInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionsInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type BinhLuanCreateWithoutPhongInput = {
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung: NguoiDungCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateWithoutPhongInput = {
    id?: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanCreateOrConnectWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    create: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanCreateManyPhongInputEnvelope = {
    data: BinhLuanCreateManyPhongInput | BinhLuanCreateManyPhongInput[]
    skipDuplicates?: boolean
  }

  export type DatPhongCreateWithoutPhongInput = {
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung: NguoiDungCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateWithoutPhongInput = {
    id?: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongCreateOrConnectWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    create: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput>
  }

  export type DatPhongCreateManyPhongInputEnvelope = {
    data: DatPhongCreateManyPhongInput | DatPhongCreateManyPhongInput[]
    skipDuplicates?: boolean
  }

  export type ViTriCreateWithoutPhongInput = {
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViTriUncheckedCreateWithoutPhongInput = {
    id?: number
    ten_vi_tri: string
    tinh_thanh: string
    quoc_gia: string
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViTriCreateOrConnectWithoutPhongInput = {
    where: ViTriWhereUniqueInput
    create: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanUpsertWithWhereUniqueWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    update: XOR<BinhLuanUpdateWithoutPhongInput, BinhLuanUncheckedUpdateWithoutPhongInput>
    create: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanUpdateWithWhereUniqueWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    data: XOR<BinhLuanUpdateWithoutPhongInput, BinhLuanUncheckedUpdateWithoutPhongInput>
  }

  export type BinhLuanUpdateManyWithWhereWithoutPhongInput = {
    where: BinhLuanScalarWhereInput
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyWithoutPhongInput>
  }

  export type DatPhongUpsertWithWhereUniqueWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    update: XOR<DatPhongUpdateWithoutPhongInput, DatPhongUncheckedUpdateWithoutPhongInput>
    create: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput>
  }

  export type DatPhongUpdateWithWhereUniqueWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    data: XOR<DatPhongUpdateWithoutPhongInput, DatPhongUncheckedUpdateWithoutPhongInput>
  }

  export type DatPhongUpdateManyWithWhereWithoutPhongInput = {
    where: DatPhongScalarWhereInput
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyWithoutPhongInput>
  }

  export type ViTriUpsertWithoutPhongInput = {
    update: XOR<ViTriUpdateWithoutPhongInput, ViTriUncheckedUpdateWithoutPhongInput>
    create: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    where?: ViTriWhereInput
  }

  export type ViTriUpdateToOneWithWhereWithoutPhongInput = {
    where?: ViTriWhereInput
    data: XOR<ViTriUpdateWithoutPhongInput, ViTriUncheckedUpdateWithoutPhongInput>
  }

  export type ViTriUpdateWithoutPhongInput = {
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViTriUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: StringFieldUpdateOperationsInput | string
    tinh_thanh?: StringFieldUpdateOperationsInput | string
    quoc_gia?: StringFieldUpdateOperationsInput | string
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateWithoutRolePermissionInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NguoiDung?: NguoiDungUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesCreateOrConnectWithoutRolePermissionInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionsCreateWithoutRolePermissionInput = {
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsCreateOrConnectWithoutRolePermissionInput = {
    where: PermissionsWhereUniqueInput
    create: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
  }

  export type RolesUpsertWithoutRolePermissionInput = {
    update: XOR<RolesUpdateWithoutRolePermissionInput, RolesUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutRolePermissionInput, RolesUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RolesUpdateWithoutRolePermissionInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type PermissionsUpsertWithoutRolePermissionInput = {
    update: XOR<PermissionsUpdateWithoutRolePermissionInput, PermissionsUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    where?: PermissionsWhereInput
  }

  export type PermissionsUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: PermissionsWhereInput
    data: XOR<PermissionsUpdateWithoutRolePermissionInput, PermissionsUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionsUpdateWithoutRolePermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NguoiDungCreateWithoutRolesInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
    Genders: GendersCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutRolesInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput>
  }

  export type NguoiDungCreateManyRolesInputEnvelope = {
    data: NguoiDungCreateManyRolesInput | NguoiDungCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionCreateWithoutRolesInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Permissions: PermissionsCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput>
  }

  export type RolePermissionCreateManyRolesInputEnvelope = {
    data: RolePermissionCreateManyRolesInput | RolePermissionCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type NguoiDungUpsertWithWhereUniqueWithoutRolesInput = {
    where: NguoiDungWhereUniqueInput
    update: XOR<NguoiDungUpdateWithoutRolesInput, NguoiDungUncheckedUpdateWithoutRolesInput>
    create: XOR<NguoiDungCreateWithoutRolesInput, NguoiDungUncheckedCreateWithoutRolesInput>
  }

  export type NguoiDungUpdateWithWhereUniqueWithoutRolesInput = {
    where: NguoiDungWhereUniqueInput
    data: XOR<NguoiDungUpdateWithoutRolesInput, NguoiDungUncheckedUpdateWithoutRolesInput>
  }

  export type NguoiDungUpdateManyWithWhereWithoutRolesInput = {
    where: NguoiDungScalarWhereInput
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyWithoutRolesInput>
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRolesInput, RolePermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRolesInput, RolePermissionUncheckedUpdateWithoutRolesInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRolesInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PhongCreateWithoutViTriInput = {
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutViTriInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutViTriInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput>
  }

  export type PhongCreateManyViTriInputEnvelope = {
    data: PhongCreateManyViTriInput | PhongCreateManyViTriInput[]
    skipDuplicates?: boolean
  }

  export type PhongUpsertWithWhereUniqueWithoutViTriInput = {
    where: PhongWhereUniqueInput
    update: XOR<PhongUpdateWithoutViTriInput, PhongUncheckedUpdateWithoutViTriInput>
    create: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput>
  }

  export type PhongUpdateWithWhereUniqueWithoutViTriInput = {
    where: PhongWhereUniqueInput
    data: XOR<PhongUpdateWithoutViTriInput, PhongUncheckedUpdateWithoutViTriInput>
  }

  export type PhongUpdateManyWithWhereWithoutViTriInput = {
    where: PhongScalarWhereInput
    data: XOR<PhongUpdateManyMutationInput, PhongUncheckedUpdateManyWithoutViTriInput>
  }

  export type PhongScalarWhereInput = {
    AND?: PhongScalarWhereInput | PhongScalarWhereInput[]
    OR?: PhongScalarWhereInput[]
    NOT?: PhongScalarWhereInput | PhongScalarWhereInput[]
    id?: IntFilter<"Phong"> | number
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntFilter<"Phong"> | number
    phong_ngu?: IntFilter<"Phong"> | number
    giuong?: IntFilter<"Phong"> | number
    phong_tam?: IntFilter<"Phong"> | number
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntFilter<"Phong"> | number
    may_giat?: BoolFilter<"Phong"> | boolean
    ban_la?: BoolFilter<"Phong"> | boolean
    tivi?: BoolFilter<"Phong"> | boolean
    dieu_hoa?: BoolFilter<"Phong"> | boolean
    wifi?: BoolFilter<"Phong"> | boolean
    bep?: BoolFilter<"Phong"> | boolean
    do_xe?: BoolFilter<"Phong"> | boolean
    ho_boi?: BoolFilter<"Phong"> | boolean
    ban_ui?: BoolFilter<"Phong"> | boolean
    ma_vi_tri?: IntFilter<"Phong"> | number
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    deletedBy?: IntFilter<"Phong"> | number
    isDeleted?: BoolFilter<"Phong"> | boolean
    deletedAt?: DateTimeNullableFilter<"Phong"> | Date | string | null
    createdAt?: DateTimeFilter<"Phong"> | Date | string
    updatedAt?: DateTimeFilter<"Phong"> | Date | string
  }

  export type NguoiDungCreateManyGendersInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NguoiDungUpdateWithoutGendersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
    Roles?: RolesUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutGendersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateManyWithoutGendersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanCreateManyNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongCreateManyNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanUpdateWithoutNguoiDungInput = {
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Phong?: PhongUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongUpdateWithoutNguoiDungInput = {
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Phong?: PhongUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionsInput = {
    id?: number
    roleId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionsInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RolesUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanCreateManyPhongInput = {
    id?: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string
    noi_dung: string
    sao_binh_luan?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatPhongCreateManyPhongInput = {
    id?: number
    ngay_den: Date | string
    ngay_di: Date | string
    so_luong_khach: number
    ma_nguoi_dat: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinhLuanUpdateWithoutPhongInput = {
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhLuanUncheckedUpdateManyWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: DateTimeFieldUpdateOperationsInput | Date | string
    noi_dung?: StringFieldUpdateOperationsInput | string
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongUpdateWithoutPhongInput = {
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatPhongUncheckedUpdateManyWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngay_den?: DateTimeFieldUpdateOperationsInput | Date | string
    ngay_di?: DateTimeFieldUpdateOperationsInput | Date | string
    so_luong_khach?: IntFieldUpdateOperationsInput | number
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NguoiDungCreateManyRolesInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    phone?: string | null
    birthday?: string | null
    genderId: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateManyRolesInput = {
    id?: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NguoiDungUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
    Genders?: GendersUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    genderId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUpdateWithoutRolesInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhongCreateManyViTriInput = {
    id?: number
    ten_phong?: string | null
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta?: string | null
    gia_tien: number
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhongUpdateWithoutViTriInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutViTriInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateManyWithoutViTriInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: IntFieldUpdateOperationsInput | number
    phong_ngu?: IntFieldUpdateOperationsInput | number
    giuong?: IntFieldUpdateOperationsInput | number
    phong_tam?: IntFieldUpdateOperationsInput | number
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: IntFieldUpdateOperationsInput | number
    may_giat?: BoolFieldUpdateOperationsInput | boolean
    ban_la?: BoolFieldUpdateOperationsInput | boolean
    tivi?: BoolFieldUpdateOperationsInput | boolean
    dieu_hoa?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    bep?: BoolFieldUpdateOperationsInput | boolean
    do_xe?: BoolFieldUpdateOperationsInput | boolean
    ho_boi?: BoolFieldUpdateOperationsInput | boolean
    ban_ui?: BoolFieldUpdateOperationsInput | boolean
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}